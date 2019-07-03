const router = require("express").Router();
const eventsController = require("../../controller/eventsController.js");

// get events with "/api/events"
router.route("/")
    .get (eventsController.findAll)
    .post(eventsController.create);

router.route("/:id")
    .get(eventsController.findById)
    .put(eventsController.update)
    .delete(eventsController.remove);

module.exports = router;