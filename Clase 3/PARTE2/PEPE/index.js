const axios = require("axios");
const moment = require("moment");

const URL = "https://jsonplaceholder.typicode.com/todos/1";

axios
  .get(URL)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

const ahora = moment();
console.log(ahora);
