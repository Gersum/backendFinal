module.exports = app => {
    const crops = require("../controllers/crop.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Crop
    router.post("/", crops.create);
  
    // Retrieve all Crops
    router.get("/", crops.findAll);
  
    // Retrieve all published Logs
  //  router.get("/published", crops.findAllPublished);
  
    // Retrieve a single Crop with id
    router.get("/:id", crops.findOne);
  
    // Update a Crop with id
    router.put("/:id", crops.update);
  
    // Delete a Crop with id
    router.delete("/:id", crops.delete);
  
    // Create a new Crop
    router.delete("/", crops.deleteAll);
  
    app.use("/api/crops", router);
  };
  