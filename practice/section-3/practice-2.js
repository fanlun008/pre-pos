'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var BArr = objectB['value']
  console.log(BArr);

  collectionA.forEach((value, index, array) => {
    for (let i of BArr) {
      if (i == value['key']){

        value['count'] -= Math.floor(value['count'] / 3);
      }
    }
  })
  console.log(collectionA);


  return collectionA;
}
