//  외부 모듈에서 객체 받아오기 : require
/*
const add = require('./modules/test_modules1').add;
const square = require('./modules/test_modules1').square;
*/
const {add, square} = require("./modules/test_modules1");

console.log("add:", add(10, 20));
console.log("square:", square(20));

const area = require("./modules/test_modules2");    //모듈 전체 불러오기

console.log(area.square(20));
console.log(area.circle(10));