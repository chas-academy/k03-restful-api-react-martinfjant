const jwt = require("../jwt");
const passport = require("koa-passport");
require("../passport");

module.exports = router => {
  router.use("/user", require("./user"));
  router.use("/item", require("./item"));
  router.use("/order", require("./order"));
  router.post("/auth", async ctx => {
    passport.authenticate("local", (err, user, info, status) => {
      if (user == false) {
        ctx.body = { sucess: false };
        ctx.throw(401);
      } else {
        ctx.body = {
          token: jwt.issue({
            user: user
          })
        };
      }
    })(ctx);
  });
  //     let email = ctx.request.body.email;
  //     let password = ctx.request.body.password;

  //     if (email === "user" && password === "pwd") {
  //       ctx.body = {
  //         token: jwt.issue({
  //           user: "user",
  //           role: "admin"
  //         })
  //       };
  //     } else {
  //       ctx.status = 401;
  //       ctx.body = { error: "Invalid login" };
  //     }
  //
};
