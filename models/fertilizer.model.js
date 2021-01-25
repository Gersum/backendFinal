module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        nutrient: Number,
        type : String 
         
        // references farmlocation,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Fertilizer = mongoose.model("fertilizer", schema);
    return Fertilizer;
  };
  