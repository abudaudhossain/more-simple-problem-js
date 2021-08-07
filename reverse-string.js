// define a function get reverse string 

function getReverseString(str) {
    let reversed = "";
    for (let char of str) {
        console.log(char);
        reversed = char + reversed;
    }

    return reversed;
}

const myString = "How are you?";
const myReverseString = getReverseString(myString);
console.log(myReverseString);