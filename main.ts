 console.log("HELLO, WORLD!");

 //Question2//
let personName: string = "SALMA";
console.log(`Hello ${personName},would you like to learn some python today?`);

//Question3//
let myname: string = "SALMA";
console.log("Lowercase:",myname.toLowerCase());
console.log("Uppercase:",myname.toUpperCase());
console.log(myname.charAt(0).toUpperCase()+
myname.slice(1).toLowerCase());

//Question4//
console.log('Albert Einstein once said,"A person who never made a mistake never tried anything new"');

//Question5//
let famous_person: string="Albert Einstein";
let quote: string = "A person who never made a mistake never tried anything new.";
let massage: string =  `${famous_person} once said, "${quote}"`;

//Question6//
let namewithwhitespace: string = "\t\n Salma \t\n";
console.log(myname);
console.log(myname.trim());

//Question7//
console.log("Addition:",5+3);
console.log("subtraction:",10-2);
console.log("Multiplication:",4*2);
console.log("Division:",16 /2);

//Question8//
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//Question9//
let favoriteNumber: number = 5
let message: string = `My favorite number is ${favoriteNumber}.`;
console.log(message);

//Question10//
//Salma, 2024-03-05
//This program prints a personal
message
let myName: string = "Salma";
console.log(`Hello ${myName},Would you like to learn some Typescript today?`);

//Question11//
let names: string[]=["salma","zee", "zeeeshan"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
//Question12//
let personNames: string[] = ["salma", "zee","zeeshan"];
for (let name of names ){
    console.log(`Hello ${name},would you like to learn some typescript today?`);
}

//Question13//
let motorcycle: string[] = ["motorcycle","car"];
motorcycle.forEach(motorcycle => {
    console.log(`i would like to own a ${motorcycle}.`);
});

//Question14//

let guestList: string[] =["salma","irum","zeeshan"];
guestList.forEach(guest => {
    console.log(`Dear ${guest},you are invited to dinner. we would be honored to have your presence.`);
});

//Question15//
let unableToAttend= "zeeshan";
console.log(`${unableToAttend}cant come to dinner.`);
//replace the guest
let newGuest = "AINTA";
guestList[guestList.indexOf(unableToAttend)] = newGuest;

//Question16//
let guest: string[] = ["salma","zee","zeeshan"];
console.log("Great news ! we found a bigger dinner table.");
guestList.unshift("cma");
guestList.splice(Math.floor(guestList.length/ 2),0,"nagina");
guestList.push("Anita");
guestList.forEach(guest =>{ console.log(`Dear ${guest},you are invited to dinner. we would be honored to have your presence.`);
});

//Question17//
let guests: string[] = ["salma","zee"];
console.log("I can only invite two people for dinner.");
while(guests.length > 2){
    const removeedguest: string | undefined = guests.pop();
    if (removeedguest !== undefined){
        console.log(`sorry ${removeedguest} i cannot invite you to dinner.`);
    }
}
for (const guest of guests){
    console.log(`${guest},you are still invited to dinner.`);
}
guests.splice(0, guests.length);
console.log("guest list after dinner:",guests);

let guestname : string[] = ["salma","zee","zeeshan"];
console.log(`number of people invited to dinner: $ {guests.lenght}`);

//Question18//
let landmarks: string[] = [`mountains`,`rivers`,`countries`,`cities` ];
console.log("list of famous landmarks:");
for(const landmark of landmarks){
    console.log(landmark);
}

//Question19//
let guestLists: string[] = ["salma","zee","zeeshan","Anita",];
console.log(`I am inviting ${guest.length} people to dinner.`);

//Question20//
let colors: string[] = ['red', 'green', 'blue'];
console.log(colors[3]);  
console.log(colors[1]);

//Question21//
let temperature = 25;
console.log("Is temperature greater than 20? I predict True.");
console.log(temperature > 20); 

//Question22//
let friend: string[] = ["zee","ali","suno"];
console.log(friend[3]);
friend[2] = "suno";

//Question23//
let numbers = 10;
let string = "hello";
let booleanTrue = true;
let booleanFalse = false;

// Test 1: Equality test for number
console.log("Is number == 10? I predict True.");
console.log(numbers == 10);

// Test 2: Equality test for string
console.log("Is string == 'hello'? I predict True.");
console.log(string == "hello");

// Test 3: Equality test for booleanTrue
console.log("Is booleanTrue == true? I predict True.");
console.log(booleanTrue == true);

// Test 4: Inequality test for number
console.log("Is number != 5? I predict True.");
console.log(numbers != 5);

// Test 5: Inequality test for string
console.log("Is string != 'world'? I predict True.");
console.log(string != "world");


// Test 6: Greater than test for number
console.log("Is number > 5? I predict True.");
console.log(numbers > 5);

// Test 7: Greater than test for string
console.log("Is string > 'hi'? I predict True.");
console.log(string > "hi");

// Test 8: Less than test for number
console.log("Is number < 15? I predict True.");
console.log(numbers < 15);

// Test 9: Less than test for string
console.log("Is string < 'world'? I predict True.");
console.log(string < "world");


//Question24//

// Tests for equality and inequality with strings
const str1: any = "hello";
const str2: any = "world";

console.log(str1 === str2); // false (inequality)
console.log(str1 !== str2); // true (equality)

// Tests using the lowercase function
const upperCaseStr: any = "HELLO";
const lowerCaseStr: any = "hello";

console.log(upperCaseStr.toLowerCase() === lowerCaseStr.toLowerCase()); // true (equality after converting to lowercase)

// Numerical tests
const num1: any = 10;
const num2: any = 5;

console.log(num1 > num2); 
console.log(num1 < num2); 
console.log(num1 >= num2); 
console.log(num1 <= num2);

// Tests using "and" and "or" operators
const x: any = 5;
const y: any = 10;

console.log(x > 3 && y < 15); // true (both conditions are true)
console.log(x > 3 || y > 15); // true (at least one condition is true)


//Question25//
let alien_Color = "green";
if (alien_Color == "green") {
    console.log("you just earned 5 point!");
}
alien_Color = "red";
if(alien_Color == "green"){
    //condition is false
}

//Question26//
alien_Color =  "green";
if (alien_Color == "green"){
    console.log("we just earned 5 point for shooting the alien!");
} else{
    console.log("we just earned 10 points.");
}

alien_Color = "yellow";
if(alien_Color == "green") {
    console.log("you just earned 5 point for shooting the alien!");
} else {
    console.log("you just earned 10 point.");
}

//Question27//
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else {
    console.log("Player earned 15 points.");
}

//Question28//
let ages: number = 45;
if (ages <4) {
    console.log("The person is small.");
}
else if (ages <8){
    console.log("the person is toddler.");
}
else if (ages <11) {
    console.log("the person is kid.");
}
else if (ages <19){
    console.log("The person is teenager.");
}
else if (ages <40){
    console.log("The person is  an adult.");
}
else if (ages <68) {
    console.log("the person is old");
}

//Question29//
// Array of favorite fruits
const favorite_fruits: string[] = ['Apple', 'Banana', 'Orange'];
console.log('fruits'.indexOf('banana') !== -1); //output: true
console.log('fruits'.indexOf('grape') !==  -1); // output: false

console.log('fruits'.indexOf('Apple') !==  -1);// output: true
console.log('fruits'.indexOf('mango') !==  -1);// output: false

console.log('fruits'.indexOf('orange') !==  -1);// output: true
console.log('fruits'.indexOf('watermelon') !==  -1);// output: false


//Question30//
let usernames: string[] = ["admin", "asif", "imran", "zee", "sara"];

for (let username of usernames) {
    if (username === "asif") {
        console.log("Hello asif, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Question31//
let username: string[] = []; 

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

//Question32//
let current_users: string[] = ["asif", "imran", "zee", "admin", "sara"];
let new_users: string[] = ["saima", "irfan", "sonu", "ali", "shani"];

// Function to check if a username is already taken
function isUsernameTaken(username: string): boolean {
    return current_users.some(user => user.toLowerCase() === username.toLowerCase());
}

// Loop through new usernames and check if they are taken
new_users.forEach(username => {
    if (isUsernameTaken(username)) {
        console.log(`The username "${username}" is already taken. Please choose a different one.`);
    } else {
        console.log(`The username "${username}" is available.`);
    }
});

//Question33//
function getOrdinalNumber(number: number): string {
    const suffixes: Record<number, string> = {
        1: "st",
        2: "nd",
        3: "rd"
    };

    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    const suffix = suffixes[lastDigit] || "th";

    // Special case for numbers ending in 11, 12, and 13
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${number}th`;
    }

    return `${number}${suffix}`;
}

console.log(getOrdinalNumber(1)); 
console.log(getOrdinalNumber(2)); 
console.log(getOrdinalNumber(3)); 
console.log(getOrdinalNumber(4)); 
console.log(getOrdinalNumber(11)); 
console.log(getOrdinalNumber(21)); 

//Question34//
let pizzas: string[] = [  "BBQ chicken", "pepperoni"];
pizzas.forEach(pizza => {
    console.log(`I like $ {pizza}pizza.`);
});
console.log("I really love pizza!");

//Question35//
const animals: string[] = ["Bear", "Camel", "Fox"];

for (const animal of animals) {
    console.log(animal);
}

for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//Question36//
function make_shirt(size: string,message: string)  {
    console.log(`Creating a ${size} shirt with the message:  "${message}" printed on it.`);
}
make_shirt("medium", "code is life");

//Question37//
function make_shirts(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} shirt with the message: ${message}`);
}
make_shirts();
make_shirts("medium");

make_shirt("small", "Hello, world!");

//Question38//

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA"); 

//Question39//

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

//Question40//
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: string, title: string, tracks: numbers};
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("Taylor Swift", "1989", 16);
let album2 = make_album("Ed Sheeran", "Divide");
let album3 = make_album("Beyoncé", "Lemonade", 12);

console.log(album1);
console.log(album2);
console.log(album3);

//Question41//

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician's names
let magicianNames: string[] = ["Muhammad Ali Jinnah", "Hamza Abbasi", "Titanic", "Iqubal"];

show_magicians(magicianNames);

//Question42//

function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

let Magicians: string[] = ['zeeshan', 'saima', 'shano', 'Ali'];
makeGreat(Magicians);
show_magicians(Magicians);

//Question43//
let magician: string[] = ["salma","zeeshan","shano"];
    

function make_great(magicians: string[]): string[] {
    let Great_magicians = [];
    Magicians.forEach(Magician =>
        { great_magicians.push(`${Magician}the Great`);

    } );
    return great_magicians

}

let magicians: string[] = ['Shano', 'mubarak', 'zeeshan', 'Ali'];

let great_magicians = make_great(magicians.slice())
console.log("Original Magicians:");
show_magicians(magicians);

console.log("Great Magicians:");
show_magicians(great_magicians);

//Question44//
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy sandwich!\n");
}

orderSandwich("grilled", "nutella", "BBQ", "Egg");
orderSandwich("Ice cream", "ham Cheese", "Bread");
orderSandwich("cucumber Salad");

//Question45//
function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): object {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
        ...options
    };
    return car;
}
const mycar = createCar("toyota","corolla", ["color", "white"], ["year","2024"]);
console.log(mycar);









































































  


























