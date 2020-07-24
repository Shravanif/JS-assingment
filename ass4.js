console.log('Assignment4');

//--------------question1------------

// for (let i=1;i<=100;i++)
// {
//     if(i%3==0)
//     {
//     console.log('fizz');
//     }
//     if(i%5==0){
//         console.log('buzz');
//     }
//     if(i%3!=0 && i%5!=0)
//     {
//         console.log('fizzbuzz');
//     }
// }

//-------------Question 2----------

// let student={
//     name:"Helsinki",
//     age:24,
//     projects:{
//         diceGame:"Two player dice game using JavaScript.",
//     }
// }
// const{name,age,projects}=student;
// console.log(name,age,projects)

//---------------Question 3--------------

// let shlist=['A','B','C','D','E'];
// let shbasket=shlist;
// shlist.push('f')
// console.log(shlist)
// console.log(shbasket)

//------------------Question 4---------------

//------------------Question 5---------------

//----------------Question 6-----------------
// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

//---------------Question 7-----------------

//    let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime;
//   }

//   alert( i ); 
// }


//-------------Question 8-----------------
// function ask(question, yes, no) {
//     if(confirm(question))
//      yes()
//     else
//      no();
//    }
   
//    ask(
//        "Do you agree?",
//     () =>{alert("You agreed.");},
//     () =>{alert("You cancelled the execution.");}
//    );

