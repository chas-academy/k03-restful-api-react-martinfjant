const mongoose = require('mongoose')
    
// Item schema
const ItemSchema = new mongoose.Schema(
{
    "item": {type: String},
    "cost": {type: Number},
    "image": {type: String},
    "url": {type: String}
}
)


const Item = mongoose.model('Item', ItemSchema)

module.exports = mongoose.model('Item')