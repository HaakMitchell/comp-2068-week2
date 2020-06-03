
//blocking
const sayHi = name => console.log(`Hello, ${name}`);

sayHi('Mitchell');

//non blocking
setTimeout(sayHi, 2500, 'Tom');
setTimeout(sayHi, 3500, 'Jim');
setTimeout(sayHi, 1500, 'Yeah');

//callback

const farewell = name => console.log(`goodbye, ${name}`);

const greeting = (name, callback) => {
    console.log(`hello, ${name}`);

    callback(name);
}

greeting(`Mitchell Haak`, farewell)
