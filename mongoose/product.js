
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log("CONNECTION OPEN!!!");
})
.catch(err => {
	console.log("Oh no error!!")
	console.log(err)
})

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true,
		min: [0, "positive price only dodo"]
	},
	onSale: {
		type: Boolean,
		default: false
	},
	categories: [String],
	qty: {
		online: {
			type: Number,
			default: 0
		},
		inStore: {
			type: Number,
			default: 0
		}
	},
	size: {
		type: String,
		enum: ['S','M','L']
	}
});

productSchema.methods.greet = function() {
	console.log("Hello, Hi, Howdy!!")
	console.log(`- from ${this.name}`)
}

productSchema.statics.fireSale = function() {
	return this.updateMany({}, {onSale: true, price:0 })
}


const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
	const foundProduct = await Product.findOne({name: 'Bike Helmet'});
	foundProduct.greet();
}

Product.fireSale().then(res => console.log(res));

// findProduct();

// const bike = new Product({ name: 'Cycling Jersey', price: 29.99, categories: ['Cycling'], size: 'M'})
// bike.save()
// .then(data => {
// 	console.log("It worked")
// 	console.log(data)
// })
// .catch(err => {
// 	console.log("Oh no error")
// 	console.log(err.errors)
// })

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 10.99}, { new: true, runValidators: true })
// .then(data => {
// 	console.log("It worked")
// 	console.log(data)
// })
// .catch(err => {
// 	console.log("Oh no error")
// 	console.log(err.errors)
// })