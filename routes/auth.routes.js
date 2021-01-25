const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
     // authJwt.verifyToken,

      
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  // user crud operations
  app.get("/api/user/all", controller.getAll);
  app.get("/api/user/:id", authJwt.verifyToken, controller.findOne);
  app.put("/api/user/:id", authJwt.verifyToken,controller.editById);
  app.delete("/api/user/:id", authJwt.verifyToken,controller.delete);
  app.delete("/api/user/:id", authJwt.verifyToken,controller.deleteAll);
  app.get("/api/user/",  controller.userCount);
  app.get("/api/user/role/count",  controller.userRoleCount);
  
};
