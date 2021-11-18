const readline = require ('readline'); 

const reader = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
}); 

console.log('Welcome to the password validation tool!');

reader.question('what is your password?', function (answer) {
    if (answer.length >= 10) {
        console.log('Success'); 
        console.log('That is correct, you may pass.'); 
    } else {
        console.log('Epic fail!');
        console.log('The cops are coming, that pasword is incorrect.');
    }
    reader.close()
} )