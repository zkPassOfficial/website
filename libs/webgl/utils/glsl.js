export const MAP_RANGE = `
float mapRange(float min1, float max1,float value, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}
`
