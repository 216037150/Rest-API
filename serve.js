const express = require("express")
const app = express()
const port = 3000;

app.use(loggingMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log("Inside Middleware")
  next()
}

app.listen(port, () =>{ 
  console.log(`The server is running on port ${port}`)
})