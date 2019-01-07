require('dotenv').config();
const User = require('./models/User');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// User.hello();
// Make sure you use form-data to connect in postman
app.post('/', (req, res) => {
    console.log(req.body);
   
})

app.post('/intruder', (req, res) => {
    console.log(req.body);
//     res.json({
//         message: 'Intruder from nodejs object'
//    });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})


