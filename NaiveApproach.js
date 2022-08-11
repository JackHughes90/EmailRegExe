var fs = require('fs');

function checkIfContainsSync(filename, str) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const result = contents.includes (str);

    return result;
}

function strCounter (filename) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const count = contents.match(/(?![\s,;])([a-z]+@techswitch.co.uk)(?=[\s,;])/gi).length;

    return count;
}

function findAnyEmail (filename) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const arrayOfEmails = contents.match(/(?![\s,;])([a-z]+@([a-z]+\.)+[a-z]+)(?=[\s,;])/gi);

    return arrayOfEmails;
}

//const listOfEmails = {}
var filePath = 'test.txt';
// console.log(checkIfContainsSync(filePath, '@softwire.com'));
console.log(findAnyEmail(filePath));
