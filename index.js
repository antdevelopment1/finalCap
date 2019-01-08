require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);
const User = require('./models/User');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(
        {
            wifiPass: "9020mndwmodw",
            wifinet: "9393jhdjdd"
        }
    );
})

app.post('/intruder', (req, res) => {
    // console.log(req.body);
    // client.messages
    // .create({
    //     body: 'Intruder detected. Please check your personal belongings.',
    //     from: '+15709191853',
    //     to: '+18622791359'
    // })
    // .then(message => console.log(message.sid))
    // .done();
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})


