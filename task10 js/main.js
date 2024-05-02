
// task-1

let setOfNumbers = new Set();
setOfNumbers.add(10);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][setOfNumbers.size - 1])

// task-2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());

// task-3
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
const myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has('role'));

// task-4
let theNumber = 100020003000;
// console.log(Number([...new Set([...{theNumber}])].sort().join('')));


// task-2-2
let specialNames = "Os10O OsO Os100O Osa1000 Os1000 Os100m";
let character = /Os\w*O\b/g;
let matchedNames = specialNames.match(character);
console.log(matchedNames);


// task-3-2
let phone = "+(995)-123 (4567)";
let pattern = /^\+\(\d{3}\)-\d{3} \(\d{4}\)$/;
if (pattern.test(phone)) {
console.log("The phone number is valid.");
}
else {
console.log("Invalid phone number.");
}





