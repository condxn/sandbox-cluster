const axios = require("axios")

Promise.all([
  axios.get("http://localhost:8000"),
  axios.get("http://localhost:8000"),
  axios.get("http://localhost:8000"),
]).then((res) => {
  console.log(res[0].data)
  console.log(res[1].data)
  console.log(res[2].data)
})
