const { count } = require('console');
var fs = require('fs');

const readline = require('readline-sync');
const { PassThrough } = require('stream');

function getNumberFromUser(myMessageToUser){

    console.log(myMessageToUser);
    let number = readline.prompt(myMessageToUser);
    number = parseInt(number);

    while( !number ){
        console.log("ERROR: That is not a number!")
        number = readline.prompt(myMessageToUser);
        number = parseInt(number);
    }

    return number;
}

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

    const arrayOfEmails = contents.match(/(?![\s,;])(?<=[a-z])(@([a-z]+\.)+[a-z]+)(?=[\s,;])/gi);

    const countOfUniqueDomains = {};

    for( i=0; i<arrayOfEmails.length; i++){

        if(!countOfUniqueDomains[arrayOfEmails[i]]){
            countOfUniqueDomains[arrayOfEmails[i]] = 1;
        }
        else{
            countOfUniqueDomains[arrayOfEmails[i]]++;
        }
    }

    //sort a dictionary in JS!:
    // var items = Object.keys(countOfUniqueDomains).map(function(key) {
    //     return [key, countOfUniqueDomains[key]];
    // });

    // items.sort(function(first, second) {
    //     return second[1] - first[1];
    // });
    // console.log(items.slice(0, 10));

    userNumber = getNumberFromUser("Please enter your Number");
    returnArray = [];

    for(var key in countOfUniqueDomains) {
        
        var value = countOfUniqueDomains[key];
        if (value>=userNumber){
            returnArray.push({key, value});
        }

        // do something with "key" and "value" variables
      }
      console.log(returnArray);


    return countOfUniqueDomains;
}

var filePath = 'test.txt';

findAnyEmail(filePath);