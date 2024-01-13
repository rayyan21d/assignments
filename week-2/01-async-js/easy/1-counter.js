// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

const startTime = new Date().getTime();
console.log(startTime)

const counter = setInterval(() => {

    const currentTime = new Date().getTime();
    console.log(Math.floor((currentTime - startTime) / 1000));

}, 1000);

