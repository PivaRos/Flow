/**
 * Creates a `getSizeStyles` function for a specific `__styles__` folder.
 *
 * @param stylesMap - A map of sizes to their respective modules.
 * @returns A function to retrieve styles based on the size.
 */
export function createGetSizeStyles(stylesMap: Record<string, any>) {
  return function getSizeStyles<T>(size: string): T {
    if (!stylesMap[size]) {
      throw new Error(`Styles not found for size: ${size}`);
    }
    return stylesMap[size];
  };
}
