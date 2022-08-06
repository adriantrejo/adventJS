function checkSledJump(heights) {
  let decreasingArray = [];
  for(let i = 0; i < heights.length-1; i++) {
    if (heights[i+1]>heights[i]) {
      decreasingArray.push(1)
      if(decreasingArray.includes(-1)) {
        return false;
      }
    }
    else if (heights[i+1]<heights[i]){
      decreasingArray.push(-1)
    }
    else {
      return false;
    }
  }
  if (!decreasingArray.includes(-1)|| !decreasingArray.includes(1)) return false;
  return true;
}

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
// checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
// checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
// checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale la pena!