const { Schema } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        longitude: Number,
        latitude: Number,
         farmers:{
          type:Schema.Types.ObjectId,
          ref:'Subscriber'
        }
      },
      { timestamps: true }
    );
  
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });

  //   schema.virtual('ownerLocations',{
  //     ref:'Farmlocation',
  //     localField:'_id',
  //     foreignField:'ownerLocation'
  //   })
  //     schema.pre('remove',async function(next){
  //    const user = this
  //    await Subscriber.remove({owner:req.userId})
  //     next()
     
  //  })
  
    const Farmlocation = mongoose.model("Farmlocation", schema);
    return Farmlocation;
  };
  