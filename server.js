const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const { User } = require("./models/User");
const { Budget } = require("./models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var db = require("./models/User");

const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const passportOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //our secret
  secretOrKey: process.env.JWT_SECRET
};

passport.use(new JwtStrategy(
  passportOpts,
  (jwt_payload, done) => {
    console.log(jwt_payload);
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
      if (err) { return done(err, false); }
      console.log("user", user);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }
))

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

app.post("/api/auth/register", function (req, res) {
  console.log("SEND IT!!!!")
  if (!req.body.username || !req.body.password) {
    return res.json({ success: false, message: "Please provide a username and password" });
  }

  var newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  console.log(newUser);
  newUser.save(err => {
    if (err) {
      console.log(err);
      return res.json({ success: false, message: "Username taken" });
    }
    res.json({ success: true, message: "Successfully created a new user" });
  })
})

app.get("/api/private/route", passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log(req.user);
  res.json({ accessible: true });
});

app.post("/api/auth/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.json({ success: false, message: "Please provide a username and password" });
  }
  console.log(req.body.username);
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    console.log(user);
    if (!user) {
      console.log(err);
      return res.status(401).send({ success: false, message: "Incorrect username or password" });
    }
    else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!err && isMatch) {
          //we giving you special token
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
          res.json({ success: true, token: "JWT " + token });
        } else {
          return res.status(401).send({ success: false, message: "Incorrect username or password" });
        }
      })
    }
  })
})

app.post("/api/budgetInfo", function (req, res) {
  console.log(req.body);
  let newBudget = new Budget({
    wallet: req.body.wallet,
    paycheck: req.body.paycheck,
    otherIncome: req.body.otherIncome,
    saveFirst: req.body.saveFirst,
    currentBalance: req.body.currentBalance,
    billsTotal: req.body.billsTotal,
    housing: req.body.housing,
    carPayment: req.body.carPayment,
    carInsurance: req.body.carInsurance,
    gas: req.body.gas,
    food: req.body.food,
    subscriptions: req.body.subscriptions,
    creditCards: req.body.creditCards,
    otherBills: req.body.otherBills,
    leftover: req.body.leftover,
  });
  console.log(newBudget);
  newBudget.save(err => {
    if (err) {
      console.log(err);
      return res.json({ success: false, message: "BUDGET NOT POSTED" });
    }
    res.json({ success: true, message: "BUDGET POSTED" });
  })
});

app.get("/api/budgetInfo", function (req, res) {
  console.log(res.body);
});

app.post("/api/setBudget", (req, res) => {

  const budgetId = req.body.budgetId;
  const userId = req.body.userId;

  db.User.update(
    {
      _id: userId
    },
    {
      budget: budgetId
    },
    { upsert: false })
    .then(user => {
      console.log(user);
      res.json(true);
    })
})

// Route to see what User looks like WITH populating
app.get("/populated", function (req, res) {
  // Using our User model, "find" every User in our db and populate them with any associated budgets
  db.User.find({})
    // Specify that we want to populate the retrieved Users with any associated budgets
    .populate("budget")
    .then(function (budgetUser) {
      // If any Users are found, send them to the client with any associated budgets
      res.json(budgetUser);

    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budgetUser");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
