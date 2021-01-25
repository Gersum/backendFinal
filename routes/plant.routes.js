
const {  authJwt } = require("../middlewares");

module.exports = app => {
    const plants = require("../controllers/plant.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Plant
    router.post("/",authJwt.verifyToken, plants.create);
  
    // Retrieve all plants
    router.get("/",authJwt.verifyToken, plants.findAll);
  
    // Retrieve all published Logs
  //  router.get("/published", plants.findAllPublished);
  
    // Retrieve a single Plant with id
    router.get("/:id",authJwt.verifyToken, plants.findOne);
  
    // Update a Plant with id
    router.put("/:id",authJwt.verifyToken, plants.update);
  
    // Delete a Plant with id
    router.delete("/:id",authJwt.verifyToken, plants.delete);
  
    // Delete all Plant
    router.delete("/",authJwt.verifyToken, plants.deleteAll);
    // get all plantation quantity 
    router.get("/quantity/allPlant",authJwt.verifyToken, plants.allPlantTotal);
 
    //get all plantation count

    router.get("/count/allPlant",authJwt.verifyToken, plants.plantCount);

   // get specific Extention workers Plantation 
    router.get("/count/specificPlant",authJwt.verifyToken, plants.PlantSpecificCount);

    router.get("/count/specificPlantCount",authJwt.verifyToken, plants.PlantSpecificCountSum);
    // get specific extention workers plantation quantity
    router.get("/count/specificPlantQuantityCount",authJwt.verifyToken, plants.PlantationTotalEach);
    
  
    app.use("/api/plants", router);
  };
  