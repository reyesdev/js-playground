var numObj = {
  'one': 2,
  "two": ["cat", "bird", "bear", "owl", "dog"],
  "three": [1,2,3,4,5],
  "myFunc": function(x) {
    return x * 3;
  }
}

console.log(numObj.two);
console.log(numObj.two[1]);

console.log(numObj.myFunc(3));

numObj.three.forEach(function(num) {
  console.log(num);
});

var threeMap = numObj.three.map(function(x) {
  return x * 2;
});

console.log(threeMap);

var x = 5;

var test = (x>10) ? console.log("greater than 10") : console.log("less than 10");