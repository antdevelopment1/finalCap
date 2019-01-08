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

}

module.exports = User;