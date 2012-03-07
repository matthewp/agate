var slice = Array.prototype.slice;
var splice = Array.prototype.splice;

function include(arr, val) {
  if(arr.indexOf(val) !== -1)
    return arr;

  arr.push(val);

  return arr;
}

function exclude(arr, val) {
  var index;

  if((index = arr.indexOf(val)) === -1)
      return arr;

  var newArr = arr.slice(index, index++);

  return newArr;
}
