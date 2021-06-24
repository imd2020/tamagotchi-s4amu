export function compareArray(arrayA, arrayB) {
  for (let i = 0; i <= arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}
