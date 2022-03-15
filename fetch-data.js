const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });