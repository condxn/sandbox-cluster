import http from "http"
import fs from "fs"

http
  .createServer((req, res) => {
    const contents = fs.readFileSync("largeFile.txt")
    res.writeHead(200)
    res.end("Done!!\n")
  })
  .listen(8000)
console.log("Simple Server Started")
