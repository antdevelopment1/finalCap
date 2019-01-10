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
    static getAllProducts() {
        return db.any(`select * from products`)
    }

    // Retrieve product by id
    static getProductById(id) {
        return db.one(`select * from products where id = ${id}`)
    }

    // Retrieve product by serialNumber
    static getProductBySerialNumber(serialNumber) {
        return db.one(`select * from products where serial_number ilike '%$1:raw%'`, [serialNumber])
    }

    // Retrieve phone number
    static getProductByPH(pHNumber) {
        return db.any(`select * from products where phone_number ilike '%$1:raw%'`, [pHNumber])
    }

    // Retrieve user by user id
    static getProductByUserId(user_id) {
        return db.one(`select * from products where user_id = ${user_id}`)
    }
    
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



