const router = require("express").Router()
const mediaController = require("../../controllers/mediaControllers")


router.route("/")
.get(mediaController.findAll)
.post(mediaController.create)

router.route("/:id")
.get(mediaController.findById)
.delete(mediaController.remove)


module.exports = router