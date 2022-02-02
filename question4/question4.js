// (4/5)
// What is wrong with the following code?

// var server_echo;
// var json = {
//    json: JSON.stringify({
//        a: 1,
//        b: 2
//    }),
//    delay: 3
// };
// fetch('/echo/', {
//    method: 'post',
//    headers: {
//        'Accept': 'application/json, text/plain, */*',
//        'Content-Type': 'application/json'
//    },
//    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
// })
// .then(function (response) {
//    server_echo = response.json().echo
//    return response.json();
// })
// .then(function (result) {
//    alert(result);
// })
// .catch (function (error) {
//    console.log('Request failed', error);
// });
// server_echo.forEach(
//    element => console.log(element)
// )

/********* Answer *********/

// There are a few things wrong with the code, here is a list

// 1. In lines 1 and 2, var is being used to declare variables instead of let and const. As of ES6, let and const
// are preferred to avoid scoping related bugs

// 2. 
