const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const { Strategy:JwtStrategy, ExtractJwt } = require("passport-jwt");

const passportOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
  //our secret
  secretOrKey: process.env.JWT_SECRET
};

passport.use(new JwtStrategy(
  passportOpts,
  (jwt_payload, done) => {
    console.log(jwt_payload);
    User.findOne({_id: jwt_payload._id}, (err, user) => {
      if(err){ return done(err, false); }
      console.log("user", user);
      if(user){
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

app.post("/api/auth/register", function(req, res){
  if(!req.body.username || !req.body.password){
    return res.json({success: false, message: "Please provide a username and password"});
  }

  var newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  newUser.save(err => {
    if(err){
      return res.json({ success: false, message: "Username taken" });
    }
      return res.json({ success: true, message: "Successfully created a new user" });
  })
})

app.get("/api/private/route", passport.authenticate('jwt', {session: false}), (req, res) => {
  console.log(req.user);
  res.json({accessible: true});
});

app.post("/api/auth/login", (req, res) => {
  if(!req.body.username || !req.body.password){
    return res.json({success: false, message: "Please provide a username and password"});
  }
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if(!user){
      return res.status(401).send({success: false, message: "Incorrect username or password"});
    }
    else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if(!err && isMatch){
          //we giving you special token
          const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET);
          res.json({success: true, token: "JWT " + token });
        } else {
          return res.status(401).send({success: false, message: "Incorrect username or password"});
        }
      })
    }
  })
})



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budgetUser");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
