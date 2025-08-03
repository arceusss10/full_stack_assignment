const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
    configurationId: {type: String, required: true, unique: true},
    matrix: [[String]],
    remark: String
});

module.exports = mongoose.model('config', configurationSchema, 'config');