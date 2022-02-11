const myName = "garrett evan harris";
const description = "i like turtles";
const career = "Web Dev TA";

const interests = ["DnD", "Locomotives", "Football", "Hiking", "Disc Golf"];

// const pastPositions = [
//     {
//     companyName: "Cracker Barrel",
//     title: "Dishwasher",
//     description: "washed dishes"
// },
// {
    //     companyName: "Innovate Bham",
    //     title: "TA",
    //     description: "this"
    // }
    // ]
    
    function displayPosition(companyName, title, description) {
        console.log("* " + companyName + " at " + title + ' - '  + description);
    };
    
    function displaySkills(skill, cool) {
        if (cool) {
            console.log("* BAM: " + skill)
        } else {
            console.log('* ' + skill)
        }
    }

// Logging for console

console.log("Name: " + myName.toUpperCase());
console.log("Career: " + career);
console.log("Description: " + description);
console.log(" ");
console.log("My Interests:");

for (i = 0; i < interests.length; i++) {
  console.log("* " + interests[i]);
};

console.log(" ");

console.log("My Previous Experience:");

// for (i = 0; i < pastPositions.length; i++) {
    // console.log(pastPositions[i].title + " at " 
    // + pastPositions[i].companyName + ' - ' 
    //  + pastPositions[i].description)
// };
displayPosition("Cracker Barrel", "dishwasher", "did dishes")
displayPosition("Innovate Bham", "TA", "This");

console.log(" ");
console.log("My Skills: ");


displaySkills("making minute rice in 58 seconds", true);
displaySkills("roundhouse kicks", false);
displaySkills("Creativity", true);
displaySkills("missing semi colon line 60", false);


// console.log("TEST! \nTTETSETSETSETTE!!")