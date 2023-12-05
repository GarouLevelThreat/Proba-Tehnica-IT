const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
	title: String,
	votingOption: String,
	pollOptions: Array,
});

const PollModel = mongoose.model("polls", PollSchema);
module.exports = PollModel;
