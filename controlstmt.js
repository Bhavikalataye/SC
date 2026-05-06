// Function to calculate fine
function calculateFine(bookType, overdueDays) {
    var finePerDay;
    // Determine fine based on book type (switch-case)
    switch (bookType.toLowerCase()) {
        case "novel":
            finePerDay = 5;
            break;
        case "magazine":
            finePerDay = 2;
            break;
        case "research":
            finePerDay = 10;
            break;
        default:
            finePerDay = 3; // default fine
    }
    // Check overdue days (if-else)
    if (overdueDays <= 0) {
        return 0; // no fine
    }
    else if (overdueDays > 30) {
        return (finePerDay * overdueDays) + 50; // extra fine for long overdue
    }
    else {
        return finePerDay * overdueDays;
    }
}
// Class for Library Member
var Member = /** @class */ (function () {
    function Member(name, book, overdueDays) {
        this.name = name;
        this.book = book;
        this.overdueDays = overdueDays;
    }
    Member.prototype.displayFine = function () {
        var fine = calculateFine(this.book, this.overdueDays);
        console.log("".concat(this.name.padEnd(12), " | ").concat(this.book.padEnd(10), " | ").concat(this.overdueDays.toString().padEnd(3), " | ").concat(fine.toString().padEnd(5)));
    };
    return Member;
}());
// Create member objects
var mem1 = new Member("Vaishnavi", "Novel", 15);
var mem2 = new Member("Rahul", "Magazine", 40);
var mem3 = new Member("Siddhi", "Research", 0);
var mem4 = new Member("Sakshi", "Novel", 35);
var members = [mem1, mem2, mem3, mem4];
// Print structured output using control statements
console.log("----- Library Fine Report -----");
console.log("Member       | Book       | Days | Fine");
console.log("------------ | ---------- | ---- | ----");
// Using a while loop with if statement
var index = 0;
while (index < members.length) {
    if (members[index].overdueDays >= 0) {
        members[index].displayFine();
    }
    index++;
}
// Using do-while loop to print a separate message for high fines
console.log("\nMembers with fines above 100:");
var j = 0;
do {
    if (calculateFine(members[j].book, members[j].overdueDays) > 100) {
        console.log("- ".concat(members[j].name));
    }
    j++;
} while (j < members.length);
