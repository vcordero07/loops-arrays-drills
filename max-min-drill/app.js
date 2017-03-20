function max(numbers) {
 // your code here
var getMax = numbers[0];
  for (var i=0; i < numbers.length; i++) {
    if (numbers[i] > getMax) {
      getMax = numbers[i];
    }
  }
  return getMax;
}


function min(numbers) {
 // your code here
  var getMin = numbers[0];
  for (var i=0; i < numbers.length; i++) {
    if (numbers[i] < getMin) {
      getMin = numbers[i];
    }
  }

  return getMin;
}



/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}


(function runTests() {
  // we'll use the variables in our test cases
  var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  var realMin1 = numList1[3];
  var realMax1 = numList1[6];
  var numList2 = [0, 1, 2, 3, 4];
  var realMin2 = numList2[0];
  var realMax2 = numList2[4];

  var testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
  ];

  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
