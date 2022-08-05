let printdate1=new Date();


let printDate = function () { console.log(new Date()) };
printDate()

let printMonth =  printdate1.toLocaleString('default', { month: 'long' });
console.log(printMonth);

let getBatchInfo = function () {
    console.log('Plutonium, W3D5, the topic for today is Nodejs module system');
}

module.exports.today = printDate;
module.exports.month = printMonth;
module.exports.aboutbatch = getBatchInfo;