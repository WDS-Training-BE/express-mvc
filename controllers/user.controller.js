const db = require("../models/db.json");

function getUser(req, res) {
	let userButWithCondition = db.users.map((user, index) => {
		return user.age <= req.query.userAge ? user : {};
	});

	res.json({
		users: userButWithCondition,
	});
}

function getUserA(req, res) {
	res.json({
		user: db.users[0],
	});
}

function postUser(req, res) {
    console.log(req.body);
    
	res.json({
		msg: "ok",
	});
}

module.exports = {
	getUser,
	getUserA,
	postUser,
};
