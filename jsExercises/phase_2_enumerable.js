Array.prototype.myEach = function(cb) {

  for (let i = 0; i < this.length; i++) {
    // console.log(`this is the ${i}`);
    cb(this[i]);
  }
  return this;
};

fe = function (el) {
  return el + 5;
};


Array.prototype.myMap = function (cb) {
  const result = [];

  // let def = this.myEach((el) => {
  //   result.push(cb(el));
  // });

  //The parameter is our cb function 
  this.myEach(el => result.push(cb(el)));

  return result;
};

Array.prototype.myReduce = function (cb , initialValue) {
  let acc = initialValue;
  let start;
  if (acc === undefined) {
    acc = this[0];
    start = 1;
  } else {
    start = 0;
  }

  myThis = this.slice(start, this.length);

  myThis.myEach(el => acc = cb(acc, el));
  return acc;
};


