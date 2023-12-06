const express = require("express");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const app = express();
const port = 8080;

const mongoose = require("mongoose");
const cors = require("cors");

const UserModel = require("./models/User");
const PollModel = require("./models/Poll");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/users");

app.get("/auth", (req, res) => {
	const decodedToken = jwt.verify(req.token, "SECRET_KEY");
	if (decodedToken) {
		res.json(true);
	} else {
		res.json(false);
	}
});

app.post("/login", (req, res) => {
	const { email, password } = req.body;
	UserModel.findOne({ email: email }).then((user) => {
		if (user) {
			const token = jwt.sign({ email: user.email }, "SECRET_KEY");
			if (user.password === password) {
				res.json({ message: "Succes!", token: token });
			} else {
				res.json("Password is incorrect.");
			}
		} else {
			res.json("No record existing...");
		}
	});
});

app.post("/register", (req, res) => {
	const { email, password } = req.body;
	UserModel.findOne({ email: email }).then((user) => {
		if (user) {
			if (user.email === email) {
				res.json("User already exists!");
			} else {
				UserModel.create(req.body)
					.then((user) => res.json(user))
					.catch((err) => res.json(err));
			}
		}
	});
});

app.post("/create-polls", (req, res) => {
	PollModel.create(req.body)
		.then((poll) => res.json(poll))
		.catch((err) => res.json(err));
});

app.get("/get-polls", (req, res) => {
	PollModel.find()
		.then((poll) => res.json(poll))
		.catch((err) => res.json(err));
});

app.delete("/delete-polls/:id", (req, res) => {
	PollModel.deleteOne({ _id: ObjectId(req.params.id) })
		.then((result) => res.json(result))
		.catch((result) => res.json(result));
});

app.listen(port, () => {
	console.log("Running...");
});
