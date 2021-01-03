/////////////// Callback Functions //////////////////
// Functions where we pass in another function. All of the higher order array methods are callback functions.

function add(a, b, callback) {
  callback(a + b);
}

add(2, 4, function(sum) {
  console.log(sum); // 6
});



///////////////////////////


function getUserName(callback) {
  const name = prompt('What is your name?');
  callback(name);
}

function greeting(name) {
  alert('Hello, ' + name);
}

getUserName(greeting); // a reference to the greeting function is passed to the function