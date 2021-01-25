const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({

    name: String,
    //_id:mongoose.Schema.Types.ObjectId
  })
);

module.exports = Role;
