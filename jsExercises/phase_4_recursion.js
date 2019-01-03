function range(start, end) {
  if (start === end) return [start];
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length < 2) return arr[0];
  return arr[0] + sumRec(arr.slice(1,arr.length));
}

function exponent(base, exp) {
  if (exp === 0) return 1;

  //exp(2,3) => 8
  //exp(2,2) => 4
  
  return base * exponent(base, exp - 1); //2 * exp(2,2)
}

function exponent2(base, exp) {
  if (exp === 0) return 1;

  if (exp % 2 === 0) { 
    return Math.pow(exponent2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);
  }
}


function fib(n) {
  if (n < 2) return [1];
  if (n === 2) return [1, 1];

  let prevFibs = fib(n-1);
  let nextFib = prevFibs[prevFibs.length - 2] + prevFibs[prevFibs.length - 1];
  return prevFibs.concat([nextFib]);
  //fib(3) = [1,1,2]
  //[1,1] + [2]   
}