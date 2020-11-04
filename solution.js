function pyramid(n, content) {
  if (n < 1) {
    return [];
  } else {
    const answer = pyramid(n - 1);
    answer.push(storey(n, content));
    return answer;
  }
}

function storey(n, content) {
  if (n < 1) {
    return [];
  } else {
    const answer = storey(n - 1);
    answer.push(content);
    return answer;
  }
}

//console.log(pyramid(4, 'brick')); would return :
//[['brick'], ['brick', 'brick'], ['brick', 'brick', 'brick'], ['brick', 'brick', 'brick', 'brick']]
