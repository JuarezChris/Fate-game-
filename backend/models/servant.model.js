const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServantCardSchema = new Schema({
    servantName: { type: String, required: true},
    servantClass: { type: String, required: true}
}, {
    timestamps: true,
});

const Servant = mongoose.model('Servant', ServantCardSchema);

module.exports = Servant;