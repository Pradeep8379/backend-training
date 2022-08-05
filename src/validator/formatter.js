let trim=function() {
    let name = '    Pradeep Patil    '
    let text = name.trim();
     console.log(text);
}
let  changetoLowerCase=function(){
    let upper = 'BACKEND'
    let text = upper.toLowerCase();
     console.log(text);
}

let  changetoUpperCase=function(){
    let lower = 'developer'
    let text = lower.toUpperCase();
     console.log(text);
}

module.exports.trim=trim;
module.exports.changetoLowerCase=changetoLowerCase;
module.exports.changetoUpperCase=changetoUpperCase;