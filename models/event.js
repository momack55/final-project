const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    event: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: false
    },
    eventId: {
        type: String,
        required: true
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;