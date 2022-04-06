let today = new Data();

let printData = function() {
    today = new Data();
    console.log(`today's data is:` + today.getData());

}
let printMonth = function() {
    today = new Data();
    let month = today.getMonth() + 1;
    console.log(`Current's month is:` + month);

}
let getBatchInfo = function() {

    console.log("Uranium, W3D1, the topic for today is Nodejs module system");

}
module.exports.printDate = printDate;
module.exports.printMounth = printMonth;
module.exports.getBatchInfo = getBatchInfo;