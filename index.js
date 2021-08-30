const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/gamesuit", (req, res) => {
  res.render("gamesuit");
});

app.get("/register", (req, res) => {
  res.render("register");
});

function getUser(req, res) {
  res.json({
    jumlahUser: users.length,
    data: users,
  });
}

function getRegister(req, res) {
  users.push({
    email: req.body.email,
    password: req.body.password,
  });

  res.redirect("/");
  //return res.render("register");
}

//untuk mengakses register dengan method POST
function postRegister(req, res) {
  users.push({
    email: req.body.email,
    password: req.body.password,
  });
  res.redirect("/");
}

app.get("/user", getUser);

app.get("/register", getRegister);

app.post("/register", postRegister);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${3000}`);
});
