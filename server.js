// My new super awesome webshop API

//Import dependencies
const Koa = require("koa")
const Router = require("koa-router")
const BodyParser = require("koa-bodyparser")
const logger = require("koa-logger")
const mongoose = require('mongoose')

//Instanciate Koa and Router
const app           = new Koa()
const router        = new Router() 
const securedRouter = new Router()
//Logger
app.use(logger())
//Use middleware for JSON-parsing
app.use(BodyParser())

//Routers
require("./routes")(router)
app.use(router.routes())
   .use(router.allowedMethods())

// JWT-auth
// const jwt = require("./jwt")
// securedRouter.use(jwt.errorHandler()).use(jwt.jwt())

//database
require("./mongo")(app)
const ObjectID = require("mongodb").ObjectID
//mongoose
mongoose.connect('mongodb://user1:user123456@ds062178.mlab.com:62178/webshop')


module.exports = app
//and go!
