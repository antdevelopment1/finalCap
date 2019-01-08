const db = require('./db');

class Product {
    
    constructor (id, serialNumber, phoneNumber, user_id) {
        this.id = id;
        // Make sure to hard code serial number in arduino code and add to payload to be sent over the server
        // This will be if there is more than one device
        this.serialNumber = serialNumber;
        this.phoneNumber = phoneNumber;
        this.user_id = user_id;
    }

    // =====================
    //        Create
    // =====================

    // Create/Register new product

    // =====================
    //       Retrieve
    // =====================

    // Retrieve all products

    // Retrieve product by id

    // Retrieve product by serialNumber

    // Retrieve phone number

    // Retrieve user by product id
    
    // =====================
    //        Update
    // =====================

    // Update serial number

    // Update phone number


    // =====================
    //        Delete
    // =====================

    // Delete product by id

    // Delete product by serial number

}

module.exports = Product;



