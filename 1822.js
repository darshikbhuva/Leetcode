let nums = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, -61, -86, -34, -81, 3,
  63, -19, 1, 35, 18, -31, -7, -50, -56, 16, -88, -62, 9, -2, -56, 16, 10, 70,
  3, 73, 97, -26, -78, 67, 35, -62, -80, 64, -26, 32, 50, -32, 63, 6, -53, 59,
  23, -35, 98, -95, -84, 3, -92, -97, 63, -50, -76, 75, 22, -69, 51, -25, -26,
  97, -60, -71, -95, -94, -90, -93, 78, 37, 30, -66, 99, -46, -79, -30, -41, 51,
  95, 13, 25, 42, 92, 74, -68, -61, 27, -64, -24, -8, 24, -47, -32, 8, 99, -4,
  93, -79, 64, -32, 9, 25, 90, -71, 86, -61, 31, -58, 80, 29, 71, -75, 93, 83,
  19, -42, -9, 20, 12, 8, -17, 84, 2, 73, 57, 32, 53, -85, 40, 98, 0, 53, -27,
  77, -96, -4, -87, -7, -96, 96, 60, 100, -7, 27, -47, -19, 80, -35, -98, 18,
  -85, 41, 55, -53, -38, -59, 41, -37, -17, -15, -4, -62, -15, 31, 0, 20, -21,
  -27, 5, -23, -56, 88, 78, 47, -6, -82, -57, 62, 25, -77, -81, -21, -33, -45,
  -89, -80, 95, 28, 46, -47, 93, -59, 91, 82, -6, -70, 95, 5, -7, -79, 62, 61,
  -68, -12, 43, -96, 12, -97, 5, 19, 5, 74, -100, 30, 37, -76, 57, -21, -89,
  -42, 83, 41, 79, -19, -65, 47, -26, -42, 30, -42, -41, 59, -76, -81, -76, -35,
  -25, 80, 97, 36, -3, -49, 46, 91, -26, 9, -19, -8, 37, -27, -70, 10, 54, -84,
  -71, 54, -94, 90, -1, 98, -44, 94, 8, -55, 84, -83, -55, 38, -66, 86, -1, 64,
  -89, -54, 27, 22, -24, 78, -18, 4, 71, 6, -99, 63, -1, 74, -71, -13, -79, 50,
  16, 24, -5, 79, 71, -80, -78, -4, -19, 100, 65, -2, -41, -52, -79, 38, -15,
  13, -84, 78, 19, 59, -49, 69, 55, 35, -12, -69, 9, -50, 18, 0, 89, 99, -88,
  67, 52, 28, -78, 98, -30, 77, 71, 30, 34, -5, 2, 41, -26, 59, 56, -61, 6, 62,
  86, 44, 27, -10, 34, -75, -67, -94, -29, -15, 17, -52, 59, -28, -45, 18, -38,
  81, -15, 26, 29, -53, -11, -18, 30, -70, 62, -65, -16, 56, -78, -40, 24, -58,
  18, 76, 69, 29, 77, 11, -76, 5, 7, 31, 10, 60, -78, -45, 9, 62, -45, 2, 35,
  92, -63, 17, -66, -76, 14, -24, 11, 45, 40, 9, -10, -92, 26, -57, -29, -60,
  -81, 31, 82, 81, 43, 87, 7, 28, -87, 39, 1, -80, -56, -97, 40, -57, -1, -47,
  47, 32, 39, 66, -43, 19, 19, 61, 4, 92, -81, 43, -57, -53, 36, 54, 96, -95,
  19, 20, -49, 36, -57, 92, -8, -27, 95, 79, -11, 56, -30, -36, -92, 22, -11,
  28, -64, -79, 99, 38, 72, -79, 90, -28, -54, 5, -50, -21, 44, -75, 78, -92,
];

function product(nums) {
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    } else if (nums[i] < 0) {
      count++;
    }
  }

  if (count % 2 === 0) {
    return 1;
  } else {
    return -1;
  }
}

console.log(product(nums));
