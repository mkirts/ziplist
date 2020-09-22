const first = ['a', 'b', 'c'];
const second = [1, 2, 3];

function zipList(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i], b[i]);
  }
  return result;
}

function zipTheEasyWay(a, b) {
  return _.flatten(_.zip(a, b));
}

console.log(zipList(first, second));
console.log(zipTheEasyWay(first, second));
// eslint-disable-next-line max-len
// Attempt 1: 21:33 - Tried resolving a problem that didn't exactly exist. Had to look up methods for zipping together two arrays.
// eslint-disable-next-line max-len
// Attempt 2: 14:32 - Continued looking into the zip method. Wasn't too bad and I do want to try things a little bit differently before submission.
