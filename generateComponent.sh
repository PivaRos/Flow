#!/bin/bash

# Base directory for components
COMPONENTS_BASE_DIR="./components"

# Function to create a folder
create_folder() {
  local folder_path=$1
  if [ ! -d "$folder_path" ]; then
    mkdir -p "$folder_path"
    echo "Created folder: $folder_path"
  fi
}

# Function to create a file
create_file() {
  local file_path=$1
  local content=$2
  echo "$content" >"$file_path"
  echo "Created file: $file_path"
}

# Function to generate a component
generate_component() {
  local group=$1
  local name=$2

  local group_dir="$COMPONENTS_BASE_DIR/$group"
  local component_dir="$group_dir/$name"
  local styles_dir="$component_dir/__styles__"
  local stories_dir="$component_dir/__stories__"

  # Create folders
  create_folder "$styles_dir"
  create_folder "$stories_dir"

  # Component file
  create_file "$component_dir/$name.tsx" "import React from \"react\";
import { View } from \"react-native\";
import { createGetSizeStyles } from \"../../../utils/styles\";
import Style from \"./__styles__\";
import { Size } from \"./$name.types\";

const getSizeStyles = createGetSizeStyles({
  sm: require(\"./__styles__/sm\").default,
  md: require(\"./__styles__/md\").default,
  lg: require(\"./__styles__/lg\").default,
});

interface ${name}Props {
  size?: Size;
}

const $name = ({ size = \"sm\" }: ${name}Props) => {
  const styles = getSizeStyles<Style>(size);

  return (
    <View style={styles.container}></View>
  );
};

export default $name;
"

  # Types file
  create_file "$component_dir/$name.types.ts" "export type Size = \"sm\" | \"md\" | \"lg\";"

  # Stories file
  create_file "$stories_dir/$name.stories.tsx" "import $name from \"../$name\";

export default {
  title: \"$group/$name\",
  component: $name,
  argTypes: {
    size: { control: { type: \"select\", options: [\"sm\", \"md\", \"lg\"] } },
  },
};

export const Default = {
  args: {
    size: \"sm\",
  },
};
"

  # Styles files
  for size in sm md lg; do
    create_file "$styles_dir/$size.ts" "import { StyleSheet } from \"react-native\";

const styles = StyleSheet.create({
  container: {
    // Add your styles for size $size here
  },
});

export default styles;
"
  done

  # Styles index file
  create_file "$styles_dir/index.ts" "type Style = {
  container: any;
};
export default Style;
"
}

# Main script
if [ "$#" -ne 2 ]; then
  echo "Usage: ./generateComponent.sh <componentGroup> <componentName>"
  exit 1
fi

componentGroup=$1
componentName=$2

generate_component "$componentGroup" "$componentName"

echo "Component $componentName has been successfully generated in group $componentGroup."
