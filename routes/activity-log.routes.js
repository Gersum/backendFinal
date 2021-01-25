module.exports = app => {
    const logs = require("../controllers/activity-log.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Log
    router.post("/", logs.create);
  
    // Retrieve all Logs
    router.get("/", logs.findAll);
  
    // Retrieve all published Logs
    router.get("/published", logs.findAllPublished);
  
    // Retrieve a single Log with id
    router.get("/:id", logs.findOne);
  
    // Update a Log with id
    router.put("/:id", logs.update);
  
    // Delete a Log with id
    router.delete("/:id", logs.delete);
  
    // Create a new Log
    router.delete("/", logs.deleteAll);
  
    app.use("/api/logs", router);
  };
  