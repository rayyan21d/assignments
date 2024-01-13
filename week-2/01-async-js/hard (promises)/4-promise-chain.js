/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

async function wait1(t) {
    return await new Promise((resolve) => setTimeout(() => resolve(`Waited ${t}s`), t * 1000))

}

async function wait2(t) {
    return await new Promise((resolve) => setTimeout(() => resolve(`Waited ${t}s`), t * 1000))
}

async function wait3(t) {
    return await new Promise((resolve) => setTimeout(() => resolve(`Waited ${t}s`), t * 1000))
}

async function calculateTime(t1, t2, t3) {

    const start = Date.now();
    const result1 = await wait1(t1);
    const result2 = await wait2(t2);
    const result3 = await wait3(t3);
    const end = Date.now();
    // console.log(end - start);
    return end - start;


}

// calculateTime(1, 2, 4);

module.exports = calculateTime;
