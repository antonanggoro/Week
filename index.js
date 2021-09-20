const express = require("express");
const app = express();
const users = require('./db/users.json');
const port = 3000;

//const { User, Userbiodata, User_History_Game}
const { Usergame } = require("./models");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/gamesuit", (req, res) => {
  res.render("gamesuit");
});

app.get('/userslogin', (req, res) => {
  res.json(users);
});

app.get('/login', (req, res) => {
  res.render('login', { message: '' });
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const userFound = users.find((user) => {
    return user.email == email;
  })

  if(!userFound) {
    console.log('not found');
    return res.render('login', {
      message: 'User not found'
    });
  }

  if(userFound.password != password) {
    console.log('wrong pass');
    return res.render('login', {
      message: 'Incorrect password'
    });
  }

  res.render('gamesuit');
});

//post user
app.post("/usersgame", (req, res) => {
  Usergame.create({
    username: req.body.username,
    password: req.body.password,
  }).then((usergane) => {
    res.send("User game berhasil dibuat");
  });
});

app.get("/usersgame/create", (req, res) => {
  res.render("usersgame/create");
});


//show all user 
app.get("/usersgame", (req, res) => {
  Usergame.findAll().then((usersgame) => {
    res.render("usersgame/index2", {
      usersgame,
    });
  });
});

// show user by id
app.get("/usersgame/:id", (req, res) => {
  Usergame.findOne({
    where: { id: req.params.id },
  }).then((usergame) => {
    res.render("usersgame/show", {
      usergame,
    });
  });
});

//update user
app.get('/usersgame/update/:id', (req, res) => {
  Usergame.findOne({ where: { id: req.params.id } })
    .then((usergame) => {
      res.render('usersgame/update', { usergame });
    });
});

app.post('/usersgame/update/:id', (req, res) => {
  Usergame.update({
    username: req.body.username,
    password: req.body.password
  },
  { where: { id: req.params.id } }
  )
  .then(() => {
    res.send('Article berhasil diupdate');
  });
});

//delete user
app.get("/usersgame/delete/:id", (req, res) => {
  Usergame.destroy({ where: { id: req.params.id } }).then(() => {
    res.send("user berhasil dihapus");
  });
});


//app.listen(3000);
app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
