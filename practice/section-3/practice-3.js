'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var BArr = objectB['value']
  console.log(BArr);

  var same = [];

  collectionA.forEach((value, index, array) => {
    if(same[value] == undefined) {
      same[value] = 1;
    } else {
      same[value]++;
    }
  })

  console.log(same)

  var totalCount = [];
  for (var item in same) {
    let one = {
      key: item,
      count: same[item]
    }
    totalCount.push(one);
  }

  console.log(totalCount)

  totalCount.forEach((value, index, array) => {
    for (let i of BArr) {
      if (i == value['key']){

        value['count'] -= Math.floor(value['count'] / 3);
      }
    }
  })

  return totalCount;
}
