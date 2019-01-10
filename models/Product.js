const db = require('./db');
const User = require('./User');

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

    static registerProduct(serial_number, phone_number, user_id) {

        return db.one(
        `insert into products (serial_number, phone_number, user_id) 
        values($1, $2, $3) returning id, serial_number, phone_number, user_id`, 
        [serial_number, phone_number, this.user_id])
            .then(result => {
                const newInstance = new Product (result.id, result.serial_number, result.phone_number, result.user_id);
                return newInstance;
            })

    }

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
        .then(serialNumber => {
            console.log(productId)
            const productInstance = new Product(productId.id, productId.serial_number, productId.phone_number, productId.user_id);
            return productInstance;
        })
    }

    // Retrieve product by serialNumber
    static getProductBySerialNumber(serialNumber) {
        return db.one(`select * from products where serial_number ilike '%$1:raw%'`, [serialNumber])
        .then(productSerialNumber => {
            const productInstance = new Product(productSerialNumber.id, productSerialNumber.serial_number, productSerialNumber.phone_number, productSerialNumber.user_id);
            return productInstance;
        })
    }

    // Retrieve phone number
    static getProductByPH(pHNumber) {
        return db.one(`select * from products where phone_number ilike '%$1:raw%'`, [pHNumber])
        .then(pPhoneNumber => {
            const productInstance = new Product(pPhoneNumber.id, pPhoneNumber.serial_number, pPhoneNumber.phone_number, pPhoneNumber.user_id);
            return productInstance;
        })
    }

    // Retrieve user by user id
    static getProductByUserId(user_id) {
        return db.one(`select * from products where user_id = ${user_id}`)
        .then(productUserId => {
            const productInstance = new Product(productUserId.id, productUserId.serial_number, productUserId.phone_number, productUserId.user_id);
            return productInstance;
        })
    }
    
    // =====================
    //        Update
    // =====================

    // Update serial number
    updateProductSerialNumber(serialNumber) {
        return db.result(`update products set serial_number=$2 where id=$1`, [this.id, serialNumber])
            .then(result => {
                if (result.rowCount === 1) {
                    console.log('Your serial number has been updated');
                } else {
                    console.log("Your serial number has not been updated");
                }
                return result.rowCount;
            })

    }

    // Update phone number
    updateProductPhoneNumber(phoneNumber) {
        return db.result(`update products set phone_number=$2 where id=$1`, [this.id, phoneNumber])
        .then(result => {
            if (result.rowCount === 1) {
                console.log('Your phone number has been updated');
            } else {
                console.log("Your phone number has not been updated");
            }
            return result.rowCount;
        })
    }


    // =====================
    //        Delete
    // =====================

    // Delete product by id
    static deleteProductById(id) {
        return db.result(`delete from products where id = ${id}`)
        .then(result => {
            if (result.rowCount === 1) {
                console.log("Product as been deeleted");
            } else {
                console.log("Product was not able to be deleted.")
            }
            return result.rowCount;
        })
    }

    // Delete product by serial number
    static deleteProductBySerialNumber(serialNumber) {
        return db.result(`delete from products where serial_number ilike '%$1:raw%'`,[serialNumber])
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

module.exports = Product;



