// function getSpiralMatrix(length) {
//   let upper = 0;
//   let lower = length - 1;
//   let left = 0;
//   let right = length - 1;
//   let i = 0;
//   let j = 0;
//   // const result = Array.from({ length }, (_) => []);
//   const result = [];

//   for (let k = 0; k < length; k += 1) {
//     result[k] = Array(length);
//   }
//   let value = 1;

//   while (true) {
//     if (upper++ > lower) break;

//     for (; j < right; j++) {
//       console.log(value);
//       result[i][j] = value++;
//       console.log(result[i][j], '-');
//       console.log(value);
//     }
//     if (right-- < left) break;

//     for (; i < lower; i++) result[i][j] = value++;

//     if (lower-- < upper) break;

//     for (; j > left; j--) result[i][j] = value++;
//     if (left++ > right) break;

//     for (; i > upper; i--) result[i][j] = value++;
//   }

//   result[i][j] = value++;
//   return result;
// }

// console.log(getSpiralMatrix(4));

// function getSpiralMatrix(length) {
//   let upper = 0;
//   let lower = length - 1;
//   let left = 0;
//   let right = length - 1;
//   let i = 0;
//   let j = 0;
//   // const result = Array.from({ length }, (_) => []);
//   const result = [];

//   for (let k = 0; k < length; k += 1) {
//     result[k] = Array(length);
//   }
//   let value = 1;

//   while (true) {
//     if (upper > lower) break;
//     upper += 1;

//     for (; j < right; j += 1) {
//       result[i][j] = value;
//       value += 1;
//     }
//     if (right < left) break;
//     right = -1;

//     for (; i < lower; i += 1) {
//       result[i][j] = value;
//       value += 1;
//     }
//     if (lower < upper) break;
//     lower = -1;

//     for (; j > left; j -= 1) {
//       result[i][j] = value;
//       value += 1;
//     }
//     if (left > right) break;
//     left += 1;

//     for (; i > upper; i -= 1) {
//       result[i][j] = value;
//       value += 1;
//     }
//   }
//   result[i][j] = value;
//   value += 1;
//   return result;
// }

// console.log(getSpiralMatrix(4));

function getSpiralMatrix(size) {
  let upper = 0;
  let lower = size - 1;
  let left = 0;
  let right = size - 1;
  let i = 0;
  let j = 0;
  const result = [];

  for (let k = 0; k < size; k += 1) {
    result[k] = Array(size);
  }
  let value = 1;

  for (let n = 0; n < result.length * size; n += 1) {
    if (upper > lower) break;
    upper += 1;

    for (; j < right; j += 1) {
      result[i][j] = value;
      value += 1;
    }
    if (right < left) break;
    right -= 1;

    for (; i < lower; i += 1) {
      result[i][j] = value;
      value += 1;
    }

    if (lower < upper) break;
    lower -= 1;

    for (; j > left; j -= 1) {
      result[i][j] = value;
      value += 1;
    }

    if (left > right) break;
    left += 1;

    for (; i > upper; i -= 1) {
      result[i][j] = value;
      value += 1;
    }
  }

  result[i][j] = value;
  value += 1;
  return result;
}

console.log(getSpiralMatrix(3));
