// Define the shape of our data
// Compile that schema into the actual model
// Export the model (so it can be used elsewhere)
// The below will be repeated in all projects.
const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: String,
    isReadyToTakeHome: Boolean,
});

const Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;