const dbConfig = require("../config/db.config.js");
const mongoosePaginate = require('mongoose-paginate-v2');
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose,mongoosePaginate);
module.exports = db;