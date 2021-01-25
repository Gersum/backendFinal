module.exports = app => {
    const subscribers = require("../controllers/Subscriber.controller.js");
    const { verifySignUp, authJwt } = require("../middlewares");
    const users = require("../controllers/auth.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Subscriber
    router.post("/",authJwt.verifyToken, subscribers.create);
  
    // Retrieve all Subscribers
    router.get("/",authJwt.verifyToken, subscribers.findAll);
  
    // Retrieve all published Subscribers
    router.get("/published",authJwt.verifyToken, subscribers.findAllPublished);
  
    // Retrieve a single Subscriber with id
    router.get("/:id",authJwt.verifyToken, subscribers.findOne);
  
    // Update a Subscriber with id
    router.put("/:id",authJwt.verifyToken, subscribers.update);
    // router.put("/:subId", subscribers.updateSubscriberwithLocation);
    router.post("/:id/location", subscribers.newSublocation);
    router.get("/:id/location", subscribers.getSublocation);
    
  
    // Delete a Subscriber with id
    router.delete("/:id",authJwt.verifyToken, subscribers.delete);
  
    // Create a new Subscriber
    router.delete("/",authJwt.verifyToken, subscribers.deleteAll);

     // count subscriber 

    router.get("/farmers/count/",authJwt.verifyToken, subscribers.subscriberCount);
    router.get("/specificfarmers/count/",authJwt.verifyToken,subscribers.subscriberSpecificCount);
  
    app.use("/api/subscribers", router);
  };
  
 
  
  