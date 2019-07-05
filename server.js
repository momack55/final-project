// Requiring dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Requiring routes
const routes = require("./routes");
const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(passport.initialize());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

//Passport Config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
app.use(routes);

//Port
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

//listener
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

