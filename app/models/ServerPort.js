var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
    nombre: {
        type: String
    },
    lugar: {
        type: String
    },
    fecha: {
        type: String
    }
},{
    collection: 'servers'
});

module.exports = mongoose.model('ServerPort', ServerPort);