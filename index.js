// code your solution here
function superbowlWin(arrayOfObjects) {
    const win = arrayOfObjects.find(object => object.result === "W");
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}

// Example usage:
const superbowls = [
    { year: 1999, result: "L" },
    { year: 2000, result: "W" },
    { year: 2001, result: "L" },
    { year: 2002, result: "L" },
    // ... other objects
];

const winningYear = superbowlWin(superbowls);
console.log("Super Bowl Winning Year:", winningYear); 
