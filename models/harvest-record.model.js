
const { Schema } = require("mongoose");
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        farmer:String,
        crop:String,
        operation: String,
        quantity:Number,
        quality:String ,
        owner:{
          type:Schema.Types.ObjectId,
          ref:'User'
        },
       // additionalInfo:String

        // references farmer,crop,farmlocation
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const HarvestRec = mongoose.model("harvestRec", schema);
    return HarvestRec;
  };
  