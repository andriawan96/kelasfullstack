//switch

let language = 'indonesia';
let greeting = null;

switch (language){
    case "english":
        greeting="good morning"; break;
    case "indonesia":
        greeting="selamat pagi"; break;
    default:
        greeting=null;
}
//console.log(greeting);

//for of
// let arrayku = ['jon', 'doe', 'wel', 'one'];
// for (const arrayItems of arrayku) {
//     console.log(arrayItems);
// }

// while and do while
// let i = 1;
// let maxData = 20;
// while ( i <= maxData) {
//     console.log(i);
//     i++;
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 100);

// let score = 90;
// let result = null;

// if( score >= 90) {
//   	result = 'Selamat! Anda mendapatkan nilai A.';
//   } else if ( score >= 80 && score <= 89 ) {
//   	result = 'Anda mendapatkan nilai B.';
//   } else if ( score >= 70 && score <= 99 ) {
//   	result = 'Anda mendapatkan nilai C.';
//   } else if ( score >= 60 && score <= 69 ) {
//   	result = 'Anda mendapatkan nilai D.';
//   } else {
//   	result = 'Anda mendapatkan nilai E.';
//   }

// console.log(result);

// let myVariable = 12;
// myVariable = 30;
// myVariable = 5;

// console.log(myVariable);

// STRUKTUR DATA LEARN DICODING
// ->OBJECT

const spaceship = {
    name: "Katak 1",
    manufacturer: "Indonesian one",
    maxSpeed: 200,
    color: "Red",
    create: 2023,
    diPakai: true
};
spaceship.color = "grey";
spaceship["tipeRudal"] = "balistik";
delete spaceship.diPakai;
// console.log(`Nama kapal ${spaceship.name} dengan kecepatan ${spaceship.maxSpeed} knot, tahun buatan ${spaceship.create} `);
// console.log(spaceship);

// -> spread operator (array)
const mainan = ['tamiya', 'RC', 'congklak', 'gambaran', 'tokdal'];
const game = ['bola', 'berenang', 'manjat pohon']
const allFavorit = [...mainan, ...game];
// console.log(...mainan);
// console.log(allFavorit);

// destructuring object
// const profil = {
//     firstname: "john",
//     lastname: "du",
//     age: 26
// }

// let firstname = "joe";
// let age = 20;

// const {firstname, lastname, age} = profil;

// console.log(`Nama depan : ${firstname} nama belakang : ${lastname} usia : ${age}`);
// console.log(firstname, lastname, age);

const profil = {
    firstname: "john",
    lastname: "du",
    age: 26
}

// let firstname = "joe";
// let age = 20;

// ({firstname, age} = profil);
// console.log(firstname);
// console.log(age);


/*function init() {
    const name = 'wan andri';

    function greet() {
        console.log(`Halo, ${name}`);
    }

    greet();
}*/
// init();

/*const add = () => {
    let counter = 0;
    return () => { return ++counter; };
}

const addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter()); */

//kuiz
/*function minimal(a,b) {
    if ( a < b) {
        return a;
    } else if(b < a) {
        return b;
    } else {
        return a;
    }
}

console.log(minimal(1,4));
console.log(minimal(3,2));
console.log(minimal(3,3));

function findIndex(array, number) {
    for(let i = 0; i < array.length; i++)
    if(array[i]===number){
        return[i];
    }
    return -1;
}*/
// console.log(findIndex([1,2,3,4,5],3));
// console.log(findIndex([1,2,3,4,5],6));
// console.log(findIndex([1,2,3,4,5],5));


//============
function minimal (a,b) {
  if(a === b){
    return a;
  } else if (a < b){
    return a;
  } else{
    return b;
  }
}

// console.log(minimal(1,4));
// console.log(minimal(3,2));
// console.log(minimal(3,3));

function findIndex(array, number) {
    for(let i = 0; i < array.length; i++){
        if(array[i]===number){
            return[i];
        }
    }
    return -1;
}
// console.log(findIndex([1,2,3,4,5],3));
// console.log(findIndex([1,2,3,4,5],6));
// console.log(findIndex([1,2,3,4,5],5));


function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);