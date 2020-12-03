const router = require("express").Router()
const mediaRoutes = require("./mediaRoute")

router.use("/movies", mediaRoutes)
router.use("/tvshows", mediaRoutes)
router.use("/profile", mediaRoutes)

module.exports = router