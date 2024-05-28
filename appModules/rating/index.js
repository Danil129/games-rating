const makeRatingFile = require("./rating-file");
const config = require("./config");
const {createRating, updateRating} = require("./caculations")

module.exports = { 
    makeRatingFile,
    config,
    createRating,
    updateRating,
};
