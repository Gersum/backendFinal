// const mongoose = require("mongoose");

// const User = mongoose.model(
//   "User",
//   new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
//     roles: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Role"
//       }
//     ]
//   })
// );

// module.exports = User;
//////////////////////////////////////////////
const db = require("../models");
const { plants } = require("../models");
const Subscriber = db.subscribers;
const Harvest = db.harvests;
const Plant = db.plants;

//const { verifySignUp, authJwt } = require("../middlewares");

  module.exports = mongoose => {
  var Schema = mongoose.Schema(
    {
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    subscribers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subscriber"
      }
    ],
     
  
    },
    { timestamps: true }
  );

//   Schema.virtual('subscribers',{
//     ref:'Subscriber',
//     localField:'_id',
//     foreignField:'owner'
//   })
//     Schema.pre('remove',async function(next){
//    const user = this
//    await Subscriber.remove({owner:req.userId})
//     next()
   
//  })

// ////////////////////////////////////////////////////
 
 Schema.virtual('harvest',{
  ref:'Harvest',
  localField:'_id',
  foreignField:'owner'
})
  Schema.pre('remove',async function(next){
 const user = this
 await Harvest.remove({owner:req.userId})
  next()
 
})

///////////////////////////////////////////////////////
Schema.virtual('plant',{
  ref:'Plant',
  localField:'_id',
  foreignField:'owner'
})
  Schema.pre('remove',async function(next){
 const user = this
 await Plant.remove({owner:req.userId})
  next()
 
})
  



  // Schema.method("toJSON", function() {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // });

  const User = mongoose.model("User", Schema);
  return User;
};

