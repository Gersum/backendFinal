
const { Schema } = require("mongoose");
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        farmer:String ,
        crop:String,
        operation: String,
        quantity:Number,
        quality:String ,
        type:String,
        variety:String,
        rainfall:Number,
        yearOfrelease:String,
        seedRate:Number,
        additionalInfo:String,
        owner:{
          type:Schema.Types.ObjectId,
          ref:'User'
        },

        // references user,plant,farmlocation,fertilizer[1,2],
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const PlantRec = mongoose.model("Plant", schema);
    return PlantRec;
  };
  