function pyramid(n) {
  if (n < 1) {
    return [];
  } else {
    const answer = pyramid(n - 1);
    answer.push(storey(n));
    return answer;
  }
}

function storey(n) {
  if (n < 1) {
    return [];
  } else {
    const answer = storey(n - 1);
    answer.push(1);
    return answer;
  }
}
