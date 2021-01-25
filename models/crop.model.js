module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        //image:URL
         
        // references farmlocation,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Crop = mongoose.model("crop", schema);
    return Crop;
  };
  