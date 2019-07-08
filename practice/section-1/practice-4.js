'use strict';

function collectSameElements(collectionA, objectB) {

  var AArr = [];
  var BArr = objectB['value'];
  collectionA.forEach((value, index, array) => {
    AArr.push(value['key'])
  })

  console.log(BArr);

  var newArr = [];

  for (let i of AArr) {
    for(let j of BArr) {
      if (i == j) {
        newArr.push(i)
      }
    }
  }

  return newArr;
}
