const router = require("express").Router()
const mediaController = require("../../controllers/mediaControllers")

router.route("/profile")
.get(mediaController.findAll)

router.route("/movies")
.post(mediaController.create)

router.route("/tvshows")
.post(mediaController.create)

module.exports = router