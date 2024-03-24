let marks = prompt("Enter student marks (between 0 and 100):");

// Convert input to a number
marks = parseFloat(marks);

// Check if input is valid
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input. Marks should be between 0 and 100.");
} else {
    // Determine grade based on marks
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the grade
    console.log(`Grade: ${grade}`);
}
