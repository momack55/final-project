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
        required: false
    },
    url: {
        type: String,
        required: false
    },
    startTime: {
        type: String,
        required: false
    },
    venue: {
        type: String,
        required: false
    },
    eventId: {
        type: String,
        required: false
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;