/*------------String----------*/

let text = "My Name is Ameer Hamza ";
let length = text.length;
console.log("The sentence length is " +length)

console.log("------")

const name ="Ameer";
let letter= name.at(2);
console.log(letter)

console.log("------")

let slice1 = "Ameer, Saad, Junaid";
let part = text.slice(5, 10);
console.log(part)

console.log("------")


let text1 = " i spend most of my time playing Games";
let char = text.charAt(6);
console.log("At index 0 the character is " +char)

console.log("------")

let text2 = "HELLO WORLD";
let char1 = text.charCodeAt(0);
console.log("The UTF-16 Code is " +char1)

console.log("------")

let str = "Ahmar, Ammar, Abbasi";
let part3 = str.substring(7, 13);
console.log(part3)

console.log("------")

let text4 = "BaksetBall";
let text5 = text4.toUpperCase();
console.log(text5)

console.log("------")


let text8 = "DRIVING A CAR";       
let text9 = text8.toLowerCase();  
console.log(text9)

console.log("------")
let text89 = "7";
let padded4 = text89.padEnd(4,"0");
console.log(padded4)


console.log("------")

let textrepeat = "Hello ZAIN! ";
let result = textrepeat.repeat(2);
console.log(result)

console.log("------")

let text10 = " GOING HOME!";
let newText8 = text10.replace("Home", "Uni");
console.log(newText8)

console.log("------")


let text77 = " GOING Home!";
let newText = text77.replace(/Home/i, "Uni");
console.log(newText)

console.log("-------")


let name1 = "HE";
let name2 = "HAD";
let name3 = "A";
let name4= "car"
let text3 = name1.concat(" ", name2," ",name3," ",name4);
console.log(text3)


console.log("------")


let trim = "      Ameer      ";
let trim2 = trim.trim();
console.log(trim2)

console.log("------")


let trimstrt = "    HAMZA     ";
let trimstrt1 = trimstrt.trimStart();
console.log(trimstrt1)

console.log("------")

let trimend = "    KHANA     ";
let trimend1 = trimend.trimEnd();
console.log(trimend)

console.log("------")

let text6 = "10";
let padded = text6.padStart(5,"10");
console.log(padded)


console.log("------")

let numb = 5;
let text99 = numb.toString();
let padded1 = text99.padStart(4,"0");
console.log(padded1)


console.log("------")



/* -----------Arrays--------------- */


    const names = [];
    names[0]= "Ammar";
    names[1]= "KHAN";
    names[2]= "ALI";
    console.log(names);

    console.log("---Using the JavaScript Keyword new----")

    const cars = new Array("toyota", "mercedez", "Suzuki");
    console.log(cars)
    
    console.log("---Accessing Array Elements----")

    const carss = ["Khan", "Axio", "BMW"];
    let car = cars[0];
    console.log(car)

    console.log("---Changing an Array Element----")

    const namess = ["Juniad", "Abbas", "najam"];
    namess[0] = "Messi";
    console.log(namess)

    console.log("---Pushing element ----")

    const fruits = ["Banana", "Orange", "Mango"];
    fruits.push("Lemon"); 
    console.log(fruits)

    console.log("---Associative Arrays----")

    const person = [];
    person[0] = "Ameer";
    person[1] = "Hamza";
    person[2] = 23;
    person.length;    
    person[0];

    console.log("---Converting an Array to a String----")

    const sport = ["Basketball", "Football", "Cricket", "Ruqby"];
    console.log(sport.toString());;

    console.log("---Checking Length ----")

    const juices = ["Banana", "Orange", "Apple"];
    fruits[juices.length] = "Lemon";  
    console.log(juices)

  

    
    


