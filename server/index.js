const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;


app.get("/documents", (req, res) => {
  fs.readFile("./document.json", "utf-8", (error, data) => {
    if (error) {
      return res.json({
        message: 'File not exist'
      })
    }
    res.send({
      status: 'success',
      data: JSON.parse(data)
    })
  })
})

app.get("/layouts", (req, res) => {
  fs.readFile("./layout.json", "utf-8", (error, data) => {
    if (error) {
      return res.json({
        message: 'File not exist'
      })
    }
    res.send({
      data: JSON.parse(data)
    })
  })
})

app.get('/', (req, res) => {
  res.send('Hello World, from express');
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))