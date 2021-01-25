module.exports = app => {
    const farmlocations = require("../controllers/farm-location.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Farmlocation
    router.post("/", farmlocations.create);
  
    // Retrieve all Farmlocations
    router.get("/", farmlocations.findAll);
  
    // Retrieve all published Logs
  //  router.get("/published", farmlocations.findAllPublished);
  
    // Retrieve a single Farmlocation with id
    router.get("/:id", farmlocations.findOne);
  
    // Update a Farmlocation with id
    router.put("/:id", farmlocations.update);
  
    // Delete a Farmlocation with id
    router.delete("/:id", farmlocations.delete);
  
    // Create a new Farmlocation
    router.delete("/", farmlocations.deleteAll);
  
    app.use("/api/farmlocations", router);
  };
  