// =======================================
//       Private Info Module Imports
// =======================================
require('dotenv').config();

// ================================
//       NPM Module Imports
// ================================
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

// ================================
//       Database Module Imports
// ================================
const db = require('./models/db');

// ================================
//       Class Module Imports
// ================================
const User = require('./models/User');
const Product = require('./models/Product');


// ===============================================
//       Public & Body Parser Module Imports
// ===============================================
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================
//       Views Module Imports
// ================================
const homepage = require('./views/home');
const loginPage = require('./views/login');
const signUpPage = require('./views/signup');
const dashboardPage = require('./views/dashboard');
const registerProductPage = require('./views/registerProduct');
const editProfilePage = require('./views/editProfile');
const buildProcessPage = require('./views/buildProcess');
const editPasswordPage = require('./views/editPassword');
const editUsernamePage = require('./views/editUsername');
const editPhoneNumberPage = require('./views/editPhoneNumber');
const editEmailPage = require('./views/editEmail');

// Sessions setup to track user
app.use(session({
    store: new pgSession({
        pgPromise: db
    }),
    secret: 'abc123kasfsdbukbfrkqwuehnfioaebgfskdfhgcniw3y4fto7scdghlusdhbv',
    saveUninitialized: false,
    cookie: { 
        maxAge: 30 * 24 * 60 * 60 * 1000 
    } 
}));

function protectRoute(req, res, next) {
    let isLoggedIn = req.session.user ? true : false;

    if (isLoggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.use((req, res, next) => {
    let isLoggedIn = req.session.user ? true : false;
    console.log(req.session.user);

    next();
})



// =======================================
//       Intruder GET / POST Requests
// =======================================

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(
        "Looks like you are posting to local host 3000"
    );
})

app.post('/intruder', (req, res) => {
    console.log(req.body);
    // client.messages
    // .create({
    //     body: 'Intruder detected. Please check your personal belongings.',
    //     from: '+15709191853',
    //     to: '+18622791359'
    // })
    // .then(message => console.log(message.sid))
    // .done();

    // client.messages
    // .create({
    //     body: 'Intruder detected again. Please check your personal belongings.',
    //     from: '+15709191853',
    //     to: '+14235822300'
    // })
    // .then(message => console.log(message.sid))
    // .done();
})

// ================================
//       Routes GET / POST
// ================================

// Home Page 
app.get('/', (req, res) => {
    res.send(homepage())
})

app.get('/buildprocess', (req, res) => {
    res.send(buildProcessPage())
})

// Sign Up Page Get Request
app.get('/signup', (req, res) => {
    res.send(signUpPage());
})

// Sign Up Page Post Request
app.post('/signup', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email1;
    const username = req.body.username;
    const password = req.body.password;

    User.createUser(firstname, lastname, email, username, password)
        .catch(() => {
            res.redirect('/signup');
        })
        .then(newUser => {
            req.session.user = newUser;
            res.redirect('/dashboard');
            console.log("User has been added");
        });
})

// Login Page Get Request
app.get('/login', (req, res) => {
    res.send(loginPage());
})

// Login Page Post Request
app.post('/login', (req, res) => {

    console.log(req.body);
    const username = req.body.username;
    const thePassword = req.body.password;

        User.getUserByUsername(username)
            .catch(err => {
                console.log('There was an error retriving you info');
                res.redirect('/login');
            })
            .then(result => {
                if (result.passwordDoesMatch(thePassword)) {
                    req.session.user = result;
                    res.redirect(`/dashboard`);
                } else {
                    res.redirect('/login');
                }
            })
})

// Logout Post Request
app.post('/logout', (req, res) => {

    req.session.destroy(() => {
        req.session = null;
        res.redirect('/');
    });
})


// ================================
//       Routes GET / POST
//   Once Inside User Dashboard
// ================================

// Register Product
// Welcome Dashbaord Page Once Logged In
app.get('/dashboard', protectRoute, (req, res) => {
    const theUser = User.from(req.session.user);

    let visitorName;
    if (req.session.user) {
        visitorName = req.session.user.firstname;
    }
    res.send(dashboardPage(`<p class="greeting">Welcome, ${visitorName}</p>`, req.session.user));
})

// Register Product Page Get Request
app.get('/registerProduct', (req, res) => {
    res.send(registerProductPage());
})

// Register Product Page Post Request
app.post('/registerProduct', (req, res) => {
    
    const user_id = req.session.user.id;
    const serialNum = req.body.serialnum;
    const phoneNumber = req.body.tel1;
    console.log(req.session.user);

    Product.getProductBySerialNumber(serialNum)
        .catch(err => {
            console.log('This product key has already been registered');
            res.redirect('/registerProduct');
        })
        .then(result => {
            if (result ===  undefined) {
                res.redirect('/registerProduct');
            } else {
                Product.registerProduct(serialNum, phoneNumber, user_id)
                .then(result => {
                    console.log(result);
                })
                res.redirect('/editProfile');
            }
        })
    // User.getUserByUsername(username)
    //         .catch(err => {
    //             console.log('There was an error retriving you info');
    //             res.redirect('/registerProduct');
    //         })
    //         .then(result => {
    //             const user_id = result.id;
    //             Product.getProductBySerialNumber(serialNum)
    //                 .catch(err => {
    //                     console.log('There was an error retriving that serial number');
    //                     res.redirect('/registerProduct');
    //                 })
    //                 .then(result => {
    //                     if (result ===  undefined) {
    //                         res.redirect('/registerProduct');
    //                     } else {
    //                         Product.registerProduct(serialNum, phoneNumber, user_id)
    //                         .then(result => {
    //                             console.log(result);
    //                         })
    //                         res.redirect('/editProfile');
    //                     }
    //                 })
    //         })
    
})

// Edit Profile
app.get('/editProfile', (req, res) => {
    res.send(editProfilePage())
})

// Update Username Page
app.get('/editUsername', (req, res) => {
    res.send(editUsernamePage());
})

// Update Username Request
app.post('/editUsername', (req, res) => {
    const username = req.body.username;
    const newUsername = req.body.newUsername;

    console.log(req.body);

    User.getUserByUsername(username)    
        .then(result => {
            console.log(result)
            result.updateUsername(newUsername)
                .then(result => {
                    console.log(result);
                    if (result === 1) {
                        res.redirect('/editProfile');
                    } else {
                        res.redirect('/editUsername');
                    }
                })
        })


})

// Update Password Page
app.get('/editPassword', (req, res) => {
    res.send(editPasswordPage());
})

// Update Password Request
app.post('/editPassword', (req, res) => {
    const password = req.body.password;
    const newPassword = req.body.newPassword;

    console.log(req.body);
    User.getUserByPassword(password)
        .then(result => {
            result.updatePassword(newPassword)
                .then(result => {
                    console.log(result);
                    if (result === 1) {
                        res.redirect('/editProfile');
                    } else {
                        res.redirect('/editPassword');
                    }
                })
        })
})

// Edit Phone Number Page
app.get('/editPhonenumber', (req, res) => {
    res.send(editPhoneNumberPage());
})

// Update Phone Number Request
app.post('/editPhonenumber', (req, res) => {

    const phoneNumber = req.body.phoneNumber;
    const newPhoneNumber = req.body.newPhoneNumber;

    console.log(req.body);

    Product.getProductByPH(phoneNumber)
        .then(result => {
            result.updateProductPhoneNumber(newPhoneNumber)
                .then(result => {
                    if (result === 1) {
                        res.redirect('/editProfile');
                    } else {
                        res.redirect('/editPhoneNumber');
                    }
                })
        })


})

// Edit Email Page
app.get('/editEmail', (req, res) => {
    res.send(editEmailPage());
})

// Update Email Request
app.post('/editEmail', (req, res) => {

    const email = req.body.email;
    const newEmail = req.body.newEmail;

    console.log(req.body);

    User.getUserByEmail(email) 
        .then(result => {
            result.updateEmail(newEmail)
                .then(result => {
                    console.log(result);
                    if (result === 1) {
                        res.redirect('/editProfile');
                    } else {
                        res.redirect('/editEmail');
                    }
                })
        })

})



app.listen(3000, () => {
    console.log('Listening on port 3000');
})

// ========================================
//   Controller Calls to Models Functions
// ========================================

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
    // Product.registerProduct('293993333', '2384753847')
    //     .then(result => {
    //         console.log(result)
    //     })

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
    // Product.getProductByUserId(2)
    //     .then(result => {
    //         console.log(result)
    //     })
    
    // =============================
    //      Update User Product
    // =============================

    // Update serial number
    // Product.getProductBySerialNumber('8282828920-2')
    //     .then(result => {
    //         result.updateProductSerialNumber('333444555')
    //             .then(updated => {
    //                 console.log(updated)
    //             })
    //     })

    // Update phone number
    // Product.getProductByPH('30303837636')
    //     .then(result => {
    //         result.updateProductPhoneNumber('8389493028')
    //             .then(result => {
    //                 console.log(result)
    //             })
    //     })


    // =============================
    //      Delete User Product
    // =============================

    // Delete product by id
    // Product.deleteProductById(1)
    //     .then(result => {
    //         console.log(result)
    //     })

    // Delete product by serial number
    // Product.deleteProductBySerialNumber('9829992022')
    // .then(result => {
    //     console.log(result)
    // })






