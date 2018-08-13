module.exports = (router) => {
    router.use('/user', require('./user'))
    router.use('/item', require('./item'))
    router.use('/order', require('./order'))
  }