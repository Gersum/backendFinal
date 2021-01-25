const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbConfig = require("../config/db.config.js");


const db = {};
db.url = dbConfig.url;
db.mongoose = mongoose;

db.user = require("./user.model.js")(mongoose);//done
db.role = require("./role.model")//done
db.logs = require("./activity-log.model.js")(mongoose);//done
db.crops = require("./crop.model.js")(mongoose);//done
db.farmlocations = require("./farm-location.model.js")(mongoose);//done
db.fertilizers = require("./fertilizer.model.js")(mongoose);//done
db.harvests= require("./harvest-record.model.js")(mongoose);
db.plants = require("./plant-record.model.js")(mongoose);
db.subscribers = require("./subscriber.model.js")(mongoose);

db.ROLES = ["user", "admin", "extension","seeder"];

module.exports = db;