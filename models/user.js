const mongoose = require('mongoose')
    
// User schema
const UserSchema = new mongoose.Schema(
    {
    "name": {type: String},
    "email": {type: String},
    "password": {type: String},
    "purchases": [
      {
          "time": {type: Date},
          "paid": {type: Boolean},
          "delivered": {type: Boolean},
          "items": [
            {
                "item": {type: String},
                "cost": {type: Number},
                "image": {type: String},
                "url": {type: String}
            }
          ]
      }
    ]
},
{ timestamps: true }
)


const User = mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')