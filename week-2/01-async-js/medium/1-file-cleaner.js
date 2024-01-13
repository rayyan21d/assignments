// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

function stringCleaner(str) {

    const characters = str.split(' ')
    const filtered = characters.filter((char) => {
        return char !== "";
    })

    console.log(filtered)
    return filtered.join(' ')

}

let output;

fs.readFile('test.txt', 'utf8', (err, data) => {

    console.log(data);
    output = stringCleaner(data);

    fs.writeFile('text.txt', output, () => {
        // console.log("The data is written")
    })


    fs.readFile('text.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log("error reading it again")
        }

        console.log(data)
    })



})


