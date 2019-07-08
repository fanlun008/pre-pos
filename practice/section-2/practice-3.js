'use strict';

function countSameElements(collection) {
  var same = new Array();

  collection.forEach((value, index, array) => {
    var reg = /[a-z]+[-|:][\d]/
    var reg2 = /[a-z]+\[[\d]+\]/
    if (reg.test(value)) {
      var splitVlue = value.split(/[-|:]/);
      console.log(splitVlue[0], splitVlue[1])
      for (let i = 0; i < splitVlue[1]; i++) {
        if (same[splitVlue[0]] == undefined) {
          same[splitVlue[0]] = 1;
        } else {
          same[splitVlue[0]]++;
        }
      }
    } else if (reg2.test(value)) {
      let reg3 = /[a-z]+/
      let reg4 = /\d+/
      let firstValue = value.match(reg3);
      let secondValue = value.match(reg4)
      console.log("second Value: " + secondValue + ", first: " + firstValue)
      for(let i = 0; i< secondValue; i++) {
        if (same[firstValue] == undefined) {
          same[firstValue] = 1;
        }else {
          same[firstValue]++;
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
      name: item,
      summary: same[item]
    }
    totalCount.push(one);
  }

  return totalCount;
}
