const Router = require('koa-router')
const router = new Router()
const Controller = require("../controllers/order")


// /ITEM
router.get("/", Controller.findAll)
router.post("/", Controller.newOrder)
// /ITEM/:ID
router.get("/:user", Controller.findByUser)
router.put("/ship/:id", Controller.deliverOrder)
router.put("/pay/:id", Controller.payOrder)



module.exports = router.routes()