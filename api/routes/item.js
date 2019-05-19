const Router = require("koa-router");
const router = new Router();
const Controller = require("../controllers/item");
const jwt = require("../jwt");

// /ITEM
router.get("/", Controller.findAll);
// /ITEM/:ID
// /ITEM/:TAG
router.get("/tag/:tag", Controller.findByTag);

router.get("/test", Controller.testController);

module.exports = router.routes();
