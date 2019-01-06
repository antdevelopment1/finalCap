const db = require('./db');

class User {

    constructor (
        firstName, lastName, userName, userPassword, wifiNetwork, wifiPassword, phoneNumber, email
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.userPassword = userPassword;
        this.wifiNetwork = wifiNetwork;
        this.wifiPassword = wifiPassword;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Test
    static hello () {
        console.log('hello there');
    }

    // =====================
    //        Create
    // =====================

    // =====================
    //       Retrieve
    // =====================
    
    // =====================
    //        Update
    // =====================

    // =====================
    //        Delete
    // =====================
}

module.exports = User;