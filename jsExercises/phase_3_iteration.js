Array.prototype.bubbleSort = function () {
  let sorted = false;
  const sortedArr = this;

  while(!sorted) {
    sorted = true; 
    
    for (i = 0; i < sortedArr.length; i++){
      if (sortedArr[i] > sortedArr[i + 1]) {
        // let larger = sortedArr[i];
        // let smaller = sortedArr[i+1];
        // sortedArr[i] = smaller;
        // sortedArr[i+1] = larger;
        [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
        sorted = false;
      }
    }
  }

  return sortedArr;
};



String.prototype.subStrings = function () {
  //[cat] = [c, ca, cat, a, at, t]
  const arr = [];

  for (let i = 0; i <= this.length; i++) {
    for (let j = i+1; j <= this.length; j++) {
      arr.push(this.slice(i, j));
    }
  }

  return arr;
};