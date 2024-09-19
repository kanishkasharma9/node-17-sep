const mongoose = require('mongoose');
async function connection() {
    try {
        console.log("there...")
        let connect = await mongoose.connect(`mongodb://localhost:27017/batch1`);
        console.log("here")
        console.log("connnection created...");

    } catch (err) {
        console.log(err)

    }
}
module.exports = connection