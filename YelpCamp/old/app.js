const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const campground = require('./models/campground'); 

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database Connected");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/', (req,res) => {
	res.render("home.ejs");
})

app.get('/campgrounds', async (req,res) => {
	const campgrounds = await campground.find({});
	res.render('campgrounds/index', {campgrounds})
})

app.get('/campgrounds/new', (req,res) => {
	res.render('campgrounds/new');
})

app.post('/campgrounds', async (req,res) => {
	// res.send();
	const campground = new Campground(req.body.campground);
	await campground.save();
	res.redirect(`/campgrounds/${campground._id}`)
})

app.get('/campgrounds/:id', async (req,res) => {
	const campGround = await campground.findById(req.params.id)
	res.render('campgrounds/show', {campGround});
})

app.get('/campgrounds/:id/edit', async (req,res) => {
	const campGround = await campground.findById(req.params.id)
	res.render('campgrounds/edit', {campGround});
})

app.put('/campgrounds/:id', async (req,res) => {

	const { id } = req.params;
	const campground = await Campground.findNyIdAndUpdate(id,{...req.body.campground});
	res.redirect(`/campgrounds/${campground._id}`)
})

app.delete('/campgrounds/:id', async (req,res) => {
	const { id } = req.params;
	await Campground.findByIdAndDelete(id);
	res.redirect('/campgrounds');
})

app.listen(3000, () => {
	console.log("Serving on port 3000")
});