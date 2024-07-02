const express = require("express");
const app = express();
const port = 3000;

// The below is a route definition. It takes the route ("/") and a callback function that will run when that route is visit
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


// A really basic express app
// Express is a library for node that makes it easy to build apps with routes for different views, integration with databases, and use middleware to do all sorts of other things

// We can visit our site at http://localhost:3000/
