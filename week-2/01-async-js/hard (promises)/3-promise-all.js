/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date().getTime());
        }, t * 1000);
    })

}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().getTime());
            // reject("I want to reject")
        }, t * 1000)
    })

}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date().getTime());
        }, t * 1000)
    })

}

async function calculateTime(t1, t2, t3) {

    try {

        const timeStart = new Date().getTime();

        // Use await to pause until all promises are resolved
        const values = await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);

        // Find the maximum timestamp
        const timeAfter = Math.max(...values);

        // Calculate the time taken for all promises
        const timeTakenForAll = timeAfter - timeStart;
        // console.log(timeTakenForAll);

        return timeTakenForAll;

    } catch (error) {
        // console.log("One of the promises is rejected");
        // console.error(error);

    }

}

// calculateTime(2, 1, 3);
// console.log("After")

module.exports = calculateTime;
