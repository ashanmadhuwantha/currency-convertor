var expect = require('chai').expect;
var curConverter = require('../index');
const prompt = require('prompt-sync')();

var currency = prompt("Enter your currency type: ");
var value =prompt("Enter your value: ");

var number = curConverter(value,currency);
console.log(number);

