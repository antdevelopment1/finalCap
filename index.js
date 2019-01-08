require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const User = require('./models/User');
const Product = require('./models/Product');

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



    // =====================
    //      Create User
    // =====================

    // Create a new user
    // User.createUser("Justin", "Tenson", "crewman@123.com", "username123", "userpassword333")
    //     .then(newUser => {
    //         console.log(newUser);
    //     })

    // =====================
    //     Retrieve User
    // =====================

    // Retrieve all users
    // User.getAllUsers()
        // .then(result => {
        //     console.log(result);
        // })

    // Retrieve user by id
    // User.getUserById(1)
    //     .then(userIdInstance => {
    //         console.log(userIdInstance);
    //     })

    // Retrieve user email
    // User.getUserByEmail('antdevelopment1@gmail.com')
    //     .then(userInstance => {
    //         console.log(userInstance);
    //     })

    // Retrieve user username
    // User.getUserByUsername('empathy91')
    //     .then(userInstance => {
    //         console.log(userInstance);
    //     })

    // Retrieve user password
    // User.getUserByPassword('userpass03003')
    //     .then(userInstance => {
    //         console.log(userInstance);
    //     })
    
    

    // ================================
    //     Create / Register Product
    // ================================

    // Create/Register new product

    // =============================
    //     Retrieve User Product
    // =============================

    // Retrieve all products

    // Retrieve product by id

    // Retrieve product by serialNumber

    // Retrieve phone number

    // Retrieve user by product id
    
    // =============================
    //      Update User Product
    // =============================

    // Update serial number

    // Update phone number


    // =============================
    //      Delete User Product
    // =============================

    // Delete product by id

    // Delete product by serial number






