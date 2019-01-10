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
    
    // =====================
    //      Update User
    // =====================

    // Update user username
    // User.getUserByUsername('hotstuff4')
    //     .then(userInstance => {
    //         userInstance.updateUsername('hotstuff')
    //         .then(result => {
    //             console.log(`${result} row has been affected`);
    //         })
    //     })
        

    // Update user password
    // User.getUserByPassword('greatPassword')
    //     .then(userInstance => {
    //         userInstance.updatePassword('greatPassword11')
    //             .then(rowCount => {
    //                 console.log(`${rowCount} row has been affected`);
    //             })
    //     })

    // Update user email
    // User.getUserByEmail('yellow1@gmail.com')
    //     .then(userInstance => {
    //         userInstance.updateEmail('yellow@gmail.com')
    //             .then(rowCount => {
    //                 console.log(`${rowCount} row has been affected`);
    //             })
    //     })
    

    // =====================
    //      Delete User
    // =====================

    // // Delete user by id
    // User.deleteById(9)
    //     .then(deleted => {
    //         console.log(`${deleted} row has been affected`);
    //     })

    // // Delete user by username
    // User.deleteByUsername('username123')
    //     .then(deleted => {
    //         console.log(`${deleted} row has been affected`);
    //     })




    // ================================
    //     Create / Register Product
    // ================================

    // Create/Register new product

    // =============================
    //     Retrieve User Product
    // =============================

    // Retrieve all products
    // Product.getAllProducts()
    //     .then(result => {
    //         console.log(result)
    //     })

    // Retrieve product by id
    // Product.getProductById(2)
    //     .then(result => {
    //         console.log(result)
    //     })


    // Retrieve product by serialNumber
    // Product.getProductBySerialNumber('8282828920-2')
    //     .then(result => {
    //         console.log(result);
    //     })

    // Retrieve phone number
    // Product.getProductByPH('30303837636')
    //     .then(result => {
    //         console.log(result)
    //     })

    // Retrieve user by product id
    Product.getProductByUserId(2)
        .then(result => {
            console.log(result)
        })
    
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






