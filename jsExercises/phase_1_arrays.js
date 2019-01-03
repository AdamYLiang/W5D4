Array.prototype.uniq = function() {
  const resultArr = [];

  for(i = 0; i < this.length; i++) {
    if (resultArr.includes(this[i])) continue;
    resultArr.push(this[i]);
  }

  return resultArr;
};


Array.prototype.twoSum = function() {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {
      if ((this[i]) + (this[j]) === 0) {
        arr.push([i, j]);
      }
    }
  }

  return arr;
};

Array.prototype.transpose = function() {
  const arr = [];

  for (let i = 0; i < this.length; i++) {

    const subArr = [];

    for (let j = 0; j < this.length; j++){
      subArr.push(this[j][i]);
    }

    arr.push(subArr);
  }

  return arr;
};
