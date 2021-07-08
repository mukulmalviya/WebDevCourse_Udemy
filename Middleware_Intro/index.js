
const express = require('express');
const app = express();
const morgan = require('morgan');

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
	res.send("YOU NEED A PASSWORD!")
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

app.use((req,res) => {
	res.status(404).send("Not Found!")
})

app.listen(3000, () => {
	console.log("App is running on localhost:3000");
})

