module.exports = app => {
    const fertilizers = require("../controllers/fertilizer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Fertilizer
    router.post("/", fertilizers.create);
  
    // Retrieve all Fertilizers
    router.get("/", fertilizers.findAll);
  
    // Retrieve all published Logs
  //  router.get("/published", fertilizers.findAllPublished);
  
    // Retrieve a single Fertilizer with id
    router.get("/:id", fertilizers.findOne);
  
    // Update a Fertilizer with id
    router.put("/:id", fertilizers.update);
  
    // Delete a Fertilizer with id
    router.delete("/:id", fertilizers.delete);
  
    // Create a new Fertilizer
    router.delete("/", fertilizers.deleteAll);
  
    app.use("/api/fertilizers", router);
  };
  