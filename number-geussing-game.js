/*
 Author: Mitchell Haak
*/

console.clear();

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const number = Math.round(Math.random() * (10 - 1) + 1);
console.log(number);

const geuss = async geuss => {
    return new Promise((resolve, reject) => {
        r1.question("Guess a number between 1 and 10...\n\n", answer => {
            return resolve(number == answer);
        })
    });
};

let cont = false;

(async () => {
    while (!cont) {
        cont = await geuss();
        if (!cont) console.error('You were wrong!');
    }

    console.log("Congrats!");
    r1.close();
})();