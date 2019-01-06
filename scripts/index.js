const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post("/", (req,res) => {
//     console.log("howdy doodie");
// })

// Make sure you use form-data to connect in postman
app.post('/', (req, res) => {
    console.log(req.body);
    console.log("Send text message from twillio");
    res.json({
        message: 'Helllo'
    });
})

app.post('/home', (req, res) => {
    console.log("Hey how are you");
    res.json({
        message: 'Helllo'
   });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})


