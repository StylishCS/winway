const Signup = require("../models/signups");
const bcrypt = require("bcrypt");

async function getLogin(req, res, next) {
	await res.send('login page');
}

async function checkLogin(req, res) {
	const loginCred = {
		email: req.body.email,
		password: req.body.password,
	};

	const temp = await Signup.findOne({ email: req.body.email });
	const keep = req.body.keep;

	if (temp) {
		const flag = await bcrypt.compare(req.body.password, temp.password);

		if (temp.email == loginCred.email && flag) {
			let body = {
				message: "Login Successful",
			};

			if (keep) {
				// let cookies = req.cookies;
                // SEARCH FOR PERCISTANCE COOKIES...
				// res.setCookie("my-new-cookie", "Hi There");
			}
			res.status(200).send(body);
		} else {
			let body = {
				error: {
					//code: 200,
					message: "Wrong Email or Password",
				},
			};
			res.status(401).send(body);
		}
	} else {
		let body = {
			error: {
				//code: 200,
				message: "Wrong Email or Password",
			},
		};
		res.status(401).send(body);
	}
}
module.exports = { getLogin, checkLogin };
