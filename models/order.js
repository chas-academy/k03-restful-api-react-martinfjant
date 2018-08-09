const mongoose = require('mongoose')
    
// User schema
const OrderSchema = new mongoose.Schema(
    {
    "user": {type: String},
    "name": {type: String},
    "adress": {type: String},
    "payment": {type: String},
    "items": {
        {"qty": {type: Number},
         "id": {type: String},
         "name": {type: String},
         "price": {type: Number}    
        }
    },
    { timestamps: true }
    }
)


const Order = mongoose.model('Order', OrderSchema)

module.exports = mongoose.model('Order')
