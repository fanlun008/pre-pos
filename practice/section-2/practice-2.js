'use strict';

function countSameElements(collection) {
  var same = new Array();

  collection.forEach((value, index, array) => {
    var reg = /[a-z]+-[\d]/
    if (reg.test(value)) {
      console.log(value + "is a ---")
      var splitVlue = value.split("-");
      console.log(splitVlue[0], splitVlue[1])
      for (let i = 0; i < splitVlue[1]; i++) {
        if (same[splitVlue[0]] == undefined) {
          same[splitVlue[0]] = 1;
        } else {
          same[splitVlue[0]]++;
        }
      }
    } else {
      if (same[value] == undefined) {
        same[value] = 1;
      } else {
        same[value]++;
      }
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
