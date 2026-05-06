// Function to calculate fine
function calculateFine(bookType: string, overdueDays: number): number {
    let finePerDay: number;

    // Determine fine based on book type (switch-case)
    switch(bookType.toLowerCase()) {
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
    } else if (overdueDays > 30) {
        return (finePerDay * overdueDays) + 50; // extra fine for long overdue
    } else {
        return finePerDay * overdueDays;
    }
}

// Class for Library Member
class Member {
    name: string;
    book: string;
    overdueDays: number;

    constructor(name: string, book: string, overdueDays: number) {
        this.name = name;
        this.book = book;
        this.overdueDays = overdueDays;
    }

    displayFine(): void {
        const fine = calculateFine(this.book, this.overdueDays);
        console.log(
            `${this.name.padEnd(12)} | ${this.book.padEnd(10)} | ${this.overdueDays.toString().padEnd(3)} | ${fine.toString().padEnd(5)}`
        );
    }
}

// Create member objects
let mem1 = new Member("Vaishnavi", "Novel", 15);
let mem2 = new Member("Rahul", "Magazine", 40);
let mem3 = new Member("Siddhi", "Research", 0);
let mem4 = new Member("Sakshi", "Novel", 35);

let members: Member[] = [mem1, mem2, mem3, mem4];

// Print structured output using control statements
console.log("----- Library Fine Report -----");
console.log("Member       | Book       | Days | Fine");
console.log("------------ | ---------- | ---- | ----");

// Using a while loop with if statement
let index = 0;
while (index < members.length) {
    if (members[index].overdueDays >= 0) {
        members[index].displayFine();
    }
    index++;
}

// Using do-while loop to print a separate message for high fines
console.log("\nMembers with fines above 100:");
let j = 0;
do {
    if (calculateFine(members[j].book, members[j].overdueDays) > 100) {
        console.log(`- ${members[j].name}`);
    }
    j++;
} while (j < members.length);