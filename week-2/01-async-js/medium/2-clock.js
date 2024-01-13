// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


const counter = setInterval(() => {

    const currentDate = new Date();

    // const Hour = currentDate.getHours();
    // const Minutes = currentDate.getMinutes();
    // const Seconds = currentDate.getSeconds();

    // console.log(`${Hour}:${Minutes}:${Seconds}`);

    console.log(currentDate.toLocaleTimeString())
    console.log(currentDate.toString().slice(16, 25))

}, 1000);