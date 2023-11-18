
const {formatDate} = require("./filters/dates.js")

imports = function(eleventyConfig) {
    // Filter definitions
    eleventyConfig.addFilter('formatDate', formatDate);
}


module.exports = {
    imports
}


