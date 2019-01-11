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

    passwordDoesMatch(thePassword) {
        return this.user_password === thePassword;
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

    // Update user username
    updateUsername(username) {
        return db.result(`update users set username=$2 where id=$1`, [this.id, username])
            .then(updatedRow => {
                if (updatedRow.rowCount === 1) {
                    console.log('Your username has been updated');
                } else {
                    console.log('Error: Your username could not be updated')
                }

                return updatedRow.rowCount;
            })
        
    }

    // Update user password
    updatePassword(password) {
        return db.result(`update users set user_password=$2 where id=$1`, [this.id, password])
            .then(result => {
                if (result.rowCount === 1) {
                    console.log('Your password has been updated');
                } else {
                    console.log("Your password has not been updated");
                }
                return result.rowCount;
            })

    }

    // Update user email
    updateEmail(email) {
        return db.result(`update users set email=$2 where id=$1`, [this.id, email])
            .then(result => {
                if (result.rowCount === 1) {
                    console.log('The email has been updated');
                } else {
                    console.log('Your email could not be updated')
                }
                return result.rowCount;
            })

    }
    

    // =====================
    //      Delete User
    // =====================

    // Delete user by id
    static deleteById(id) {
        return db.result(`delete from users where id=${id}`)
            .then(result => {
                if (result.rowCount === 1) {
                    console.log('Your account has been deleted');
                } else {
                    console.log('Your account could not be deleted');
                }
                return result.rowCount;
            })
    }

    // Delete user by username
    static deleteByUsername(username) {
        return db.result(`delete from users where username ilike '%$1:raw%'`,[username])
            .then(result => {
                if (result.rowCount === 1) {
                    console.log('Your account has been deleted');
                } else {
                    console.log('Your account could not be deleted');
                }
                return result.rowCount;
            })

    }
}

module.exports = User;