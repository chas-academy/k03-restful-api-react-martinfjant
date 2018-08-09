const Router = require('koa-router')
const router = new Router()
const Controller = require("../controllers/item")


// /ITEM
router.get("/", Controller.findAll)
router.post("/", Controller.createItem)
// /ITEM/:ID
//router.get("/:id", Controller.findItem)
router.put("/:id", Controller.updateItem)
router.delete("/:id", Controller.deleteItem)
// /ITEM/:TAG
router.get("/tag/:tag", Controller.findByTag)

router.get("/test", Controller.testController)


module.exports = router.routes()