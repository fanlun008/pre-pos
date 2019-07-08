'use strict';

function collectSameElements(collectionA, objectB) {

  var newArr = [];
  var BArr = objectB['value']

  for(let i of collectionA) {
    for(let j of BArr) {
      if (i == j) {
        newArr.push(i)
      }
    }
  }

  return newArr;
}
