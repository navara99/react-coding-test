// (4/5)
// What is wrong with the following code?

var server_echo;
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2
  }),
  delay: 3
};
fetch('/echo/', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
  .then(function (response) {
    server_echo = response.json().echo
    return response.json();
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
server_echo.forEach(
  element => console.log(element)
)

/********* Answer *********/

// There are a a few things wrong with the code

// 1. In lines 1 and 2, var is being used to declare variables instead of let and const. As of ES6, let and const
// are preferred to avoid scoping related bugs

// 2. On line 21, response.json().echo will return undefined for 2 reasons. Firstly, .json method is
// asynchronous, so it needs to be returned and chained with a then method to actually 
// read the value. Secondly, even if the value was already there, the original json we sent does not have an echo
// property. Therefore line 30 will also throw an error since we cant iterate over undefined. Also,
// line 22 will throw an error because the promise has already been consumed in line 21. 







