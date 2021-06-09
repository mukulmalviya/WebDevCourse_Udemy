const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!");
//     // res.send("hello, we got your request! this is a response...")
//     res.send('<h1> This is my webpage! </h1>');
// })

app.get('/', (req, res) => {
    res.send('This is my homepage !!!');
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on ${subreddit} subreddit</h1>`);
})
app.get('/cats', (req, res) => {
    res.send('Meow !!!');
})
app.get('/dogs', (req, res) => {
    res.send('WOOF !!!');
})

app.post('/cats', (req, res) => {
    res.send("Not a get but post !!!");
})

app.get('/search', (req, res) => {
    const { q } = (req.query);
    if (!q) {
        res.send('Nothing found if nothing searched!')
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send('I dont know this !!!');
})

app.listen(8080, () => {
    console.log("Listening on port 8080....");
})

