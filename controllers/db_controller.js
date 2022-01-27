const mongoose = require('mongoose');
const db = mongoose.connection
const User = require('../models/user')

const dbController = {
    reset: reset
}


// Implementations
function reset() {
    console.log("RESET starting");
    horatio = new User({
        name: 'Horatio'
    })
    User.collection.drop();
    horatio.save((err,saved) => {
        if (err) return handleError(err);
        console.log(saved);
    })
    console.log("RESET finished");
    return horatio;
}

module.exports.dbController = dbController;