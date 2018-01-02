// “<name>’s job title is <title>”
const jobs = [
    {name: "Bob", department: "sales", title: "sales manager"},
    {name: "Tina", department: "finance", title: "director of finance"},
    {name: "Randy", department: "IT", title: "hardware guy"},
    {name: "Glenda", department: "C-suite", title: "CEO"}
];

for (let i = 0; i < jobs.length; i++) {
let phrase = `${jobs[i].name}'s jobs title is ${jobs[i].title} in the ${jobs[i].department} department.`;
console.log(phrase);
}

function capF(){

}

document.getElementById("btn").addEventListener("click", (event) => {
    console.log("You clicked! Good for you.", event.target);
});
document.getElementById("btn2").addEventListener("click", event => "Ay");

let name = "Fred";
let job = () => "I do the things";
let number = 4;

let myCOllection = {
    name, 
    job, 
    number
}; // if the key is the exact same characters as a known variable, then that variable is assigned to the object property

let myArray = [ "scoop", true, 77, "What up"];
myArray.forEach((thing, index) => {
    thing = thing+1;
    console.log(`${thing} is the # ${index} index in the array!`);
});
console.log(myArray);
// forEach edits the original array

let newArray = myArray.map( thing => {
    return thing*2;
});
console.log(newArray);
// map returns a new array which has to be assigned to a new variable

let salesMgrs = jobs.filter(emp => {
    return emp.title === "sales manager";
}); //returns a new array
console.log(salesMgrs); 

