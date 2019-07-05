const mongoose = require("mongoose");
const db = require("../models");
const mongoDB=require("../config/keys")

mongoose
    .connect(
        mongoDB,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const eventSeed = {
    event: ["Test Event"],
    description: "test test test",
    startTime: "2019-07-07 14:00:00",
    image: "https://image.shutterstock.com/image-photo/abstract-blurred-event-people-background-260nw-308055317.jpg",
    url: "https://nashville.eventful.com/events",
}

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });