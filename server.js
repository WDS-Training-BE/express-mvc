//Tao ket noi server
//Ket noi DB
//Quan ly route(API endpoint)

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routing management
const userRoute = require("./routes/user.route");

// app.use((req, res, next) => {
// 	req.xyz = "123";

// 	next();
// });

// app.use((req, res) => {
// 	console.log(req.xyz);
// });

app.use("/user", userRoute);

app.listen(3000, function () {
	console.log("Server is running on port 3000");
});
