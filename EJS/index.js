const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get("/", (req, res) => {
    res.render('home')
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
})

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})