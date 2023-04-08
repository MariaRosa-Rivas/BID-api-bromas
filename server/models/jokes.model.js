const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const Broma = mongoose.model("Broma", JokeSchema);

module.exports = Broma;