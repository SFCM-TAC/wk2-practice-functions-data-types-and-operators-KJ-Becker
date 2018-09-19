
function sayHello(name) {
  // TODO: return a greeting string that greets
  // the person by name, e.g. "Hello, Emily!"
  return "Hi " + name
}

function sayHelloEverybody(threeNames) {
  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items
  return "Hello, Calvin, Kevin, and Stan!"
}

function getClasses() {
  // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
  return [" Coding", " Conducting", " Graphic Lit", " History of Romanticism", " Private Lesson", " Advanced Musicianship" ]
}

function labelOrder(fiveNumbers) {
  // TODO: Given an array with five numbers, return a new array
  // of strings that have labels for the ordering.
  // e.g. if fiveNumbers is [1,2,3,4,5] your function should return:
  // ["first: 1", "second: 2", "third: 3", "fourth: 4", "fifth: 5"]
  // NOTE: inputs should be an array with exactly five items

  fiveNumbers.splice(0,1, "first:1");
  fiveNumbers.splice(1,1, "second:2");
  fiveNumbers.splice(2,1, "third:3");
  fiveNumbers.splice(3,1, "fourth:4");
  fiveNumbers.splice(4,1, "fifth:5");

  return fiveNumbers

}

function calculateVolume(w, l, h) {
  // TODO: given a room's width, length, and height
  // write a function that returns the volume
  var volume = w*l*h;
  return volume;
}

function isOdd(n) {
  // TODO: given a number, return true if it is odd, false if it is even
  // HINT: the expression "Boolean(0)" is false, "Boolean(1)"" is true
  // DOUBLE HINT: Try using the modulus operator (%)
  if (n%2 == 1){
    return Boolean(1)
  }
  else{
    return Boolean(0)
  }
}

// ** CART PRICES ** //

const saleAmount = .25 // 25% off!
function getSalePrice(originalPrice) {
  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)

  discountPrice = originalPrice*(1-saleAmount);
  return discountPrice
}

function getSalePrices(threeOriginalPrices) {
  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
  var discountedPrices = threeOriginalPrices
  var i;
  for (i = 0; i < threeOriginalPrices.length; i++){
    discountedPrices.splice(i, 1, threeOriginalPrices[i]*(1-saleAmount));
  }
  return discountedPrices
}

 // ** COUNTING ** //

var counter = 0;
function incrementCounter() {
  // TODO: implement a function that increments (adds 1) to the counter variable
  // and then calls showCounter to update the interface with the new value.
  // Test your code by opening the developer console and calling incrementCounter.
  // The displayed answer for this question should increase by 1!

  counter = counter+1;
  showCounter();
  return
}
function showCounter() {
  // updates the counter element with the latest value
  document.getElementById('counter').textContent = counter;
}
