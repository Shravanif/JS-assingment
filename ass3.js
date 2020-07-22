// // ---------Question 1------------


let number = prompt("Enter a number:");

if (number % 2==0)
{
    console.log("The number is even.")
}
else
{
    console.log("The number is odd.")
}


// // -------------Question 2--------------


let OS = prompt("Enter osname");
let vs = prompt("Enter your version");

if (OS=="Android");
if(vs=="9"){
OS.match("Android")
vs.match("9")
console.log(`The OS name is ${OS} and Version is ${vs}.`);
}else{
console.log("pls check your Android name and Version once Again");
};



// -----------------Question 3---------------

var marks=prompt("enter the marks");

switch (marks) {
    case marks:
        if (marks>=35 && marks<80) {
            console.log("Grade B");
        }
        break;

    case marks:
        if (marks>=80)
        {
            console.log("Grade B");
        }    
    default:
        console.log("You are fail");
        break;
}