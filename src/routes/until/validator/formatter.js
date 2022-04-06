let trim = function(text) {
    console.log(text.trim());
}

let ChangetoLowerCase = function(text) {
    console.log(`After changing "` + text + `"to lowercase is: ` + text.toLowerCase())
}
let ChangeToUpperCase = function(text) {
    console.log(`After changing "` + text + `"to uppercase is: ` + text.toUpperCase())
}
module.exports.trim = trim;
module.exports.ChangetoLowerCase = ChangetoLowerCase;
module.exports.ChangeToUpperCase = ChangeToUpperCase;