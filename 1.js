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
