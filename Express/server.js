const express = require("express");
const logger = require("./logger");
const app = express();

app.use(logger);
app.set("view engine", "ejs");
app.set("views", "Public");
app.get("/", (req, res, next) => {
  res.render("Home");
  next()
});
app.get("/services", (req, res, next) => {
    res.render("OurServices");
    next()
  });
  app.get("/contact", (req, res, next) => {
    res.render("ContactUs");
    next()
  });


app.listen((port = 3500), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running at http://localhost:${port}/`);
  }
});
