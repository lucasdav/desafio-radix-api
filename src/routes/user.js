const {Router} = require("express")
const { postUser } = require("../controllers/user")
const { validateRegistrationUser } = require("../validators/validateRegistrationUser")

const router = Router()

router.post('/', validateRegistrationUser, postUser)

module.exports = router