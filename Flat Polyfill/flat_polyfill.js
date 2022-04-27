Array.prototype.flatArray = function () {
  const arr = [];
  const flattener = (array) => {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (Array.isArray(element)) {
        flattener(element);
      } else {
        arr.push(element);
      }
    }
  };
  flattener(this);
  return arr;
};

const list = [1,2,6,4,[1,5,8]].flatArray()
console.log(list);
