'use strict';

function countSameElements(collection) {

  var same = [];

  collection.forEach((value, index, array) => {
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

  return totalCount;
}
