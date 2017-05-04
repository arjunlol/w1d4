var words = ["ground", "control", "to", "major", "tom"];

function map (arr, func){
  var counter = 0;
  var result = [];
  for (var value of arr){
    result[counter] = func(value);
    counter++;
  }
  return result;
};


var output = map(words, function(word) {
  return word.length;
});

console.log(output);

//output [6, 7, 2, 5, 3]
