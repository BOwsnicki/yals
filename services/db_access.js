const mongoose = require('mongoose')
const db = mongoose.connection

const dbAccess = {
    reset : reset
}


// Implementations
function reset() {
    console.log("resetting!")
}

module.exports.dbAccess = dbAccess;