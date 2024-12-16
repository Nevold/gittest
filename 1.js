function shuffleChar(str, iterations) {
  let rounds = iterations;
  let result = str;

  while (rounds) {
    let left = '';
    let right = '';

    for (let i = 0; i < result.length; i += 1) {
      if (i % 2 !== 0) {
        right += result[i];
      } else {
        left += result[i];
      }
    }

    result = `${left}${right}`;
    rounds -= 1;

    if (result === str) {
      rounds = iterations % (iterations - rounds);
    }
  }

  return result;
}

console.log(shuffleChar('012345', 1));

// function shuffleChar(str, iterations) {
//   let step = iterations;
//   let result = str;

//   for (let index = 0; index < step; index += 1) {
//     let left = '';
//     let right = '';

//     for (let i = 0; i < str.length; i += 1) {
//       if (i % 2 !== 0) {
//         right += result[i];
//       } else {
//         left += result[i];
//       }
//     }

//     result = `${left}${right}`;

//     if (result === str) {
//       step = iterations % (iterations - step);
//       console.log(step);
//     }
//   }
//   return result;
// }

// console.log(shuffleChar('qwerty', 6));
