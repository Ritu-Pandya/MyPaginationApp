module.exports = app => {

    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

         // Create a new User
  router.post("/", users.create);

  // Retrieve all User
  router.get("/", users.findAll);
    // Retrieve a single User with id
    router.get("/:id", users.findOne);
    router.put("/:id",users.update);
    router.delete("/:id",users.delete);

  app.use('/api/users',router)
}