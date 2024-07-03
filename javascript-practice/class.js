

class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}


let person_one = new Person("haider");
person_one.introduceSelf();




// Inheritencce extends refers to the  inherited from Person class 
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}



// Inheritence 
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}




class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #checkifPrivate(){
    console.log("how iz  it private");
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'
myExample.#checkifPrivate();
// myExample.#somePrivateMethod(); // SyntaxError the  is   not  accesible   as  it  is private 
                                    //tot he  class 



  class FormHandler {
    constructor(emailSelector, nameSelector, userSelector, errorSelector) {
      this.emailInput = document.querySelector(emailSelector);
      this.nameInput = document.querySelector(nameSelector);
      this.userData = document.querySelector(userSelector);
      this.errorMessage = document.querySelector(errorSelector);
    }
  
    validateInputs() {
      if (this.emailInput.value === '' || this.nameInput.value === '') {
        this.errorMessage.innerHTML = "<h4>The fields are Required</h4>";
        this.errorMessage.classList.add('error');
  
        setTimeout(() => {
          this.errorMessage.classList.remove('error');
          this.errorMessage.innerHTML = "";
        }, 4000);
        return false;
      }
      return true;
    }
  
    addUser() {
      if (this.validateInputs()) {
        let person = {
          email: this.emailInput.value,
          name: this.nameInput.value
        };
        console.log(person);
  
        let node = document.createElement("li");
        node.innerHTML = `name is ${person.name} and email is ${person.email}`;
        console.log(node);
        this.userData.appendChild(node);
      }
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.addUser();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const formHandler = new FormHandler('#email', '#name', '.users', '.msg');
    document.querySelector('form').addEventListener('submit', formHandler.handleSubmit.bind(formHandler));
  });
                                      