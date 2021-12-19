const mongoose = require('mongoose');
const user = require('../models/user');
const db = mongoose.connection
const User = require('../models/user')

const dbAccess = {
    reset: reset
}


// Implementations
async function reset() {
    console.log("RESET starting");
    horatio = new User({
        name: 'Horatio'
    })
    console.log(horatio);
    User.collection.drop();
    await horatio.save(function (err) {
        if (err) return handleError(err);
    })
    console.log("RESET finished");
}

module.exports.dbAccess = dbAccess;