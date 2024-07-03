
//_______________JS RANDOM  PRACTICE

// Assert 
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}

// This will clear the console
console.error(new Error('Whoops, something bad happened'));

// const name = 'Will Robinson';
// console.warn(`Danger ${name}! Danger!`);

// Use meaningful labels for console.count
console.count('default');
console.count('xyz haider');

const code = 5;
console.error('error #%d', code);
// Prints: error #5, to stderr


let person = "haider";

let index = 1;
let x = true

let whyNot = undefined;
let idea = null;

console.log(typeof (person));
console.log(typeof (index));
console.log(typeof (x));
console.log(typeof (whyNot));
console.log(typeof (idea));



console.log("_______________CONCATINATION__________________________");
console.log("I  am  going to be concatednated" + ":: with this part ");


let name = "haider";
let age = 34

console.log(`hello my name is ${name} and my age is ${age}`);


//  String and  methods:

let stringPractice = "hello world";

console.log(stringPractice.length);

console.log("stringPractice To Lower", stringPractice.toLocaleLowerCase());
console.log("stringPractice To Upper", stringPractice.toLocaleUpperCase());

console.log("stringPractice SubSstring", stringPractice.substring(6, 11));

let newString = "hi,this,is,world"
console.log("newString is:", newString, "\n splited ", newString.split(","));

const fruits = ["apple", "mango"];
console.log(fruits);
fruits.push("grapes");
console.log(fruits);
fruits.pop()
console.log(fruits);

// shift and   unshit
fruits.shift("grapes");
console.log(fruits, "apple  removed");
fruits.unshift("unshifted item added");
console.log(fruits);

console.log(Array.isArray(fruits));

let text = "W3Schools";
let result = Array.isArray(text); console.log(result);


const personObj = {

  firstName: "John",
  lastName: "Doe",
  gender: "Male",
  dateOfBirth: "1985-01-15",
  contactInfo: {
    email: "john.doe@example.com",
    phone: "555-555-5555",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "Illinois",
      zip: "62701",
      country: "USA"
    }
  },
  education: [
    {
      level: "Bachelor's Degree",
      field: "Computer Science",
      schoolName: "University of Illinois",
      graduationYear: 2007
    }
  ],
  employment: [
    {
      companyName: "Tech Corp",
      position: "Software Engineer",
      startDate: "2010-06-01",
      endDate: "2015-08-31"
    },
    {
      companyName: "Innovate LLC",
      position: "Senior Developer",
      startDate: "2015-09-01",
      endDate: "2020-12-31"
    }
  ],
  hobbies: ["Hiking", "Photography", "Reading"]
};

//console.log(personObj);

const { firstName, lastName, gender, dateOfBirth } = personObj;

personObj.skills = ["JavaScript", "TypeScript", "React", "Node.js"],
  console.log(personObj);


// Arrays:
const todos = [
  {
    id: 1,
    text: "Buy groceries",
    incomplete: true
  },
  {
    id: 2,
    text: "Clean the house",
    incomplete: true
  },
  {
    id: 3,
    text: "Finish the project report",
    incomplete: false
  },
  {
    id: 4,
    text: "Call the electrician",
    incomplete: true
  }
];

console.log(todos[1].text);
console.log("stringify json");
const xRay = JSON.stringify(todos);
console.log(xRay);

for (let index = 0; index < todos.length; index++) {
  const element = todos[index];
  console.log(`element ${index}\n`, element);

}
for (const todo of todos) {
  console.log(todo.text);
}


// For Each method
console.log(" For Each method");
todos.forEach(item => {
  console.log(item);
});

// For Each method
console.log(" For Each method");
todos.forEach(item => {
  console.log(item);
});


//Map Method:

let newReturnedArray = todos.map((item) => {
  return item.text
})

console.log(newReturnedArray);


let newFilterArray = todos.filter(item => item.incomplete === true).map((item) => {
  return item.text
});
console.log(newFilterArray);


console.log("Adding  Two Number");




const add = (x, y) => x + y;

console.log(add(5, 6)); // Outputs: 11



// OOP:

//Constructor function

function making(firstNames, lastNames, dob) {
  this.firstNames = firstNames;
  this.lastNames = lastNames;
  this.dob = new Date(dob);
  this.dateOfBirth = function () {
    return this.dob.getMinutes();

  }
}


making.prototype.getFullName = function () {
  console.log(`the name is ${this.firstNames},${this.lastNames}`);
}


let newPerson = new making('Haider', 'Zubairi', '10-4-2023');
let fewPerson = new making('Haider', 'Akbar', '10-4-2023');

console.log('newPerson', newPerson);
console.log('fewPerson', fewPerson.dateOfBirth());

fewPerson.getFullName();



class practicePerson {

  constructor(firstNames, lastNames, dob) {
    this.firstNames = firstNames;
    this.lastNames = lastNames;
    this.dob = new Date(dob);
  }

  getFullName() {
    console.log(`the name is ${this.firstNames},${this.lastNames}`);
  }

  getFullName() {
    console.log(`the name is ${this.firstNames},${this.lastNames}`);
  }
}