const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
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
    eventId: {
        type: String,
        required: true,
        unique: true
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;