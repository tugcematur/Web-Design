
//1.Örnek

//const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
//   console.log(cars[i])
//   console.log(text)
// }
// document.getElementById("car").innerHTML = text;     //text değişkenin içine yerleştirir.

//2.Örnek

//For
/* const person = {fname:"John", lname:"Doe", age:25};    //Nesne Tanımı                         Objenin içinde döner

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
  console.log(txt)
}

//3. Örnek

document.getElementById("demo").innerHTML = txt; */             //Array içinde döner


//4.örnek

/* const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;
 */


//5. Örnek

/* let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text; */



//While

/* 
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text; */ 


//Do-While

/* let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text; */