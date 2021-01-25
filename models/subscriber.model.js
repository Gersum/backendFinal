const { Schema } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        city: String,
        phone:Number, 
        //references farmlocation, 
        owner:{
          type:Schema.Types.ObjectId,
          ref:'User'
        },
       
      },
      { timestamps: true }
    );
  
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });
  
    const Subscriber = mongoose.model("Subscriber", schema);
    return Subscriber;
  };
  