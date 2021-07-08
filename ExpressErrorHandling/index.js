
const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('tiny'));
app.use((req,res,next) => {
	req.requestTime = Date.now();
	console.log(req.method, req.path);
	return next();
	// console.log("1st middleware after its next")
})
app.use("/dogs",(req,res,next) => {
	console.log("I love dogs!!");
	return next();
	// console.log("1st middleware after its next")
})

const verifyPassword = (req, res, next) => {
	const { password } = req.query;
	if (password === 'chickennugget') {
	    next();
	}
	// res.send("YOU NEED A PASSWORD!")
	throw new AppError('Password required!',401);
}

// app.use(verifyPassword)

app.get('/', (req,res) => {
	console.log(`Request time: ${req.requestTime}`)
	res.send('HOME PAGE!');
})

app.get('/dogs', (req,res) => {
	console.log(`Request time: ${req.requestTime}`)
	res.send("Woof Woof")
})

app.get('/secret', verifyPassword, (req,res) => {
	res.send(`My secret is: i eat pineapples on pizzas`)
})

app.get('/admin', (req, res) => {
	throw new AppError('You are not an Admin!', 403)
})

app.get('/error', (req,res) => {
	chicken.fly();
})

app.use((req,res) => {
	res.status(404).send("Not Found!")
})

app.use((err,req,res,next) => {
	const {status = 500, message = 'Something Went Wrong'} = err;
	res.status(status).send(message);
})

app.listen(3000, () => {
	console.log("App is running on localhost:3000");
})

