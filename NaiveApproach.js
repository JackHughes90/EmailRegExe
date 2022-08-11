var fs = require('fs');

function checkIfContainsSync(filename, str) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const result = contents.includes (str);

    return result;
}

function strCounter (filename) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const count = contents.match(/[\r\n\s ]([a-z.'_%+-]+@softwire.com)[.,;\r\n\s ]/gi).map(x => x.replaceAll(/[\s]/g, ''));

    return count;
}

function findAnyEmail (filename) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const count = contents.match(/[\r\n\s ]([a-z.'_%+-]+@+[a-z])[.,;\r\n\s ]/gi).map(x => x.replaceAll(/[\s]/g, ''));

    return count;
}

const listOfEmails = {

}

var filePath = 'C:/Users/jachug/Documents/03.EmailRegExe/test.txt';
// console.log(checkIfContainsSync(filePath, '@softwire.com'));
console.log(strCounter(filePath));
