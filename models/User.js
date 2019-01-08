const db = require('./db');

class User {

    constructor (id, firstname, lastname, email, username, user_password) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.user_password = user_password;
    }

    
    // =====================
    //      Create User
    // =====================

    // Create a new user
    static createUser(firstname, lastname, email, username, user_password) {
        return db.one(`
        insert into users (firstname, lastname, email, username, user_password) 
        values($1, $2, $3, $4, $5) returning id, firstname, lastname, email, username, user_password`, 
        [firstname, lastname, email, username, user_password])
            .then(result => {
                const newUser = new User(result.id, firstname, lastname, email, username, user_password);
                return newUser;
            })
    }


    // =====================
    //     Retrieve User
    // =====================

     // Retrieve all users
     static getAllUsers() {
         return db.any(`select * from users`)
     }

    // Retrieve user by id
    static getUserById(id) {
        return db.one(`select * from users where id = ${id}`)
        .then(userId => {
            const userInstance = new User(userId.id, userId.firstname, userId.lastname, userId.email, userId.username, userId.user_password);
            return userInstance;
        })
    }

    // Retrieve user email
    static getUserByEmail(email) {
        return db.one(`select * from users where email ilike '%$1:raw%'`, [email])
        .then(userEmail => {
          const userInstance = new User(userEmail.id, userEmail.firstname, userEmail.lastname, userEmail.email, userEmail.username, userEmail.user_password);
          return userInstance;
        })
    }

    // Retrieve user username
    static getUserByUsername(username) {
        return db.one(`select * from users where username ilike '%$1:raw%'`, [username])
        .then(userUsername => {
            const userInstance = new User(userUsername.id, userUsername.firstname, userUsername.lastname, userUsername.email, userUsername.username, userUsername.user_password);
            return userInstance;
        })

    }

    // Retrieve user password
    static getUserByPassword(password) {
        return db.one(`select * from users where user_password ilike '%$1:raw%'`, [password])
        .then(userPassword => {
            const userInstance = new User(userPassword.id, userPassword.firstname, userPassword.lastname, userPassword.email, userPassword.username, userPassword.user_password);
            return userInstance;
        })
    }
    
    // =====================
    //      Update User
    // =====================

}

module.exports = User;