// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript.There is a hint at the bottom of the file if you get stuck.


async function returnDate() {

    const date = new Date().getTime();
    return date;
}


while (true) {

    const timer = setTimeout(returnDate, 1000);
    console.log(timer);

}




































































// (Hint: setTimeout)