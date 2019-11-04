var moment = require('moment');
var ncp = require('copy-paste');
var timestamp = moment().format();
console.log(timestamp);
console.log('Copied to clipboard!');
ncp.copy(timestamp);
