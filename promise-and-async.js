console.clear();

//callback
const callMe = name => {
    console.log(`Time for dinner, ${name}!!!`);
}

setTimeout(name => {
    console.log("Done like dinner");

    callMe(name);

}, 2000, 'Mitchell Haak');

// promises
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Done like dinner");
        resolve();
    }, 2000);

})
.then(() => callMe("Mitch"));

// async

const asyncFunc = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("done like dinner");
            return resolve();
        });
    });

    await callMe(name);
    
};

