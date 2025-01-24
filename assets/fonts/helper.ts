/**
 * Returns the font family string for a given base font and weight.
 *
 * @param baseFont - The base font name (default is 'Inter').
 * @param weight - The numeric weight of the font (e.g., 100, 400, 700).
 * @returns A string representing the specific font family for the given weight.
 */
export const getFontFamily = (
  baseFont: string = 'Inter',
  weight: number,
): string => {
  // Define a mapping between font weights and their corresponding font-family strings.
  const weightMap: Record<number, string> = {
    100: `${baseFont}-Thin`, // Weight 100 corresponds to Thin style
    200: `${baseFont}-ExtraLight`, // Weight 200 corresponds to ExtraLight style
    300: `${baseFont}-Light`, // Weight 300 corresponds to Light style
    400: `${baseFont}-Regular`, // Weight 400 corresponds to Regular style
    500: `${baseFont}-Medium`, // Weight 500 corresponds to Medium style
    600: `${baseFont}-SemiBold`, // Weight 600 corresponds to SemiBold style
    700: `${baseFont}-Bold`, // Weight 700 corresponds to Bold style
    800: `${baseFont}-ExtraBold`, // Weight 800 corresponds to ExtraBold style
    900: `${baseFont}-Black`, // Weight 900 corresponds to Black style
  };

  // Return the corresponding font-family for the weight or default to Regular if weight is invalid.
  return weightMap[weight] || `${baseFont}-Regular`;
};
