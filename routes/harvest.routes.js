module.exports = app => {
    const harvests = require("../controllers/harvest.controller.js");
    const { verifySignUp, authJwt } = require("../middlewares");
  
    var router = require("express").Router();
  
    // Create a new Harvest
    router.post("/",authJwt.verifyToken,harvests.create);
  
    // Retrieve all Harvests
    router.get("/",authJwt.verifyToken, harvests.findAll);
  
    // Retrieve all published Logs
  //  router.get("/published", harvests.findAllPublished);
  
    // Retrieve a single Harvest with id
    router.get("/:id",authJwt.verifyToken, harvests.findOne);
  
    // Update a Harvest with id
    router.put("/:id",authJwt.verifyToken, harvests.update);
  
    // Delete a Harvest with id
    router.delete("/:id",authJwt.verifyToken, harvests.delete);
  
    // Create a new Harvest
    router.delete("/",authJwt.verifyToken,harvests.deleteAll);

     // Count Total Harvest
     router.get("/count/harvest/",authJwt.verifyToken,harvests.harvestCount);
     // specific extention workers harvest count
     router.get("/count/SpecificHarvest/",authJwt.verifyToken,harvests.harvestSpecificCount);
     router.get("/quantity/totalSum/",authJwt.verifyToken,harvests.harvestTotal);
     router.get("/quantity/allTotalSum/" ,authJwt.verifyToken,harvests.allHarvestTotal);
     router.get("/quantity/allTotalSumEach/" ,harvests.allHarvestTotalEach);
    app.use("/api/harvests", router);
  };
  