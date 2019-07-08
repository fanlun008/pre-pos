'use strict';

function collectSameElements(collectionA, collectionB) {

  var newArr = [];

  for (let i of collectionA) {
    for(let j of collectionB) {
      if (i == j) {
        newArr.push(i)
      }
    }
  }

  return newArr;
}
