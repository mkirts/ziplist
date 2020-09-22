const firstList = ['a', 'b', 'c'];
const secondList = [1, 2, 3];

function zipList(a, b) {
  const resultList = [];
  for (let i = 0; i < a.length; i++) {
    resultList.push(a[i], b[i]);
  }
  return resultList;
}

function zipListTheSimpleWay(a, b) {
  return _.flatten(_.zip(a, b));
}

console.log(zipList(firstList, secondList));
console.log(zipListTheSimpleWay(firstList, secondList));
// eslint-disable-next-line max-len
// Attempt 1: 21:33 - Tried resolving a problem that didn't exactly exist. Had to look up methods for zipping together two arrays.
// eslint-disable-next-line max-len
// Attempt 2: 14:32 - Continued looking into the zip method. Wasn't too bad and I do want to try things a little bit differently before submission.
// eslint-disable-next-line max-len
// Attempt 3: 5:44 - Went to google to see additional samples of zipping together files. The quickest way would be to use the .push call
