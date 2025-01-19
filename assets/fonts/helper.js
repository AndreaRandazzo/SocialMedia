export const getFontFamily = (baseFont = 'Inter', weight) => {
  const weightMap = {
    100: `${baseFont}-Thin`,
    200: `${baseFont}-ExtraLight`,
    300: `${baseFont}-Light`,
    400: `${baseFont}-Regular`,
    500: `${baseFont}-Medium`,
    600: `${baseFont}-SemiBold`,
    700: `${baseFont}-Bold`,
    800: `${baseFont}-ExtraBold`,
    900: `${baseFont}-Black`,
  };

  return weightMap[weight] || `${baseFont}-Regular`;
};
