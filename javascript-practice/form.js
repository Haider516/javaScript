//__________PRACTICE RELATED  TO THE FORM____________________

let emailInput = document.querySelector('#email');
let nameInput = document.querySelector('#name');
let userData = document.querySelector('#users');
let errorMessage = document.querySelector('.msg');


//Event  listener For adding  list item

document.querySelector('#my-form').addEventListener('submit', (e) => {

  e.preventDefault();
  if (emailInput.value === '' && nameInput.value === '') {


    errorMessage.innerHTML = "<h4>The fields are Required</h4>";
    errorMessage.classList.add('error');

    setTimeout(() => {
      errorMessage.remove('error').innerHTML = ""
    }, 4000)
  }
  else {
    let person = {}
    person.email = emailInput.value;
    person.name = nameInput.value;
    console.log(person);
    let node = document.createElement("li");
    node.innerHTML = `name is ${person.name} and email is ${person.email}`;
    console.log(node);
    userData.appendChild(node);
  }
})

//it's small rectangle and  it track coordinates  on it  only the class coordinates is the id for rectanlge   

coordinates.addEventListener('mousemove', (event) => {
  const tracker = document.getElementById('coordinates');
  const x = event.clientX;
  const y = event.clientY;
  tracker.textContent = `x: ${x}, y: ${y}`;

});


//   At   event listen it  fetches the  number set by  the  user and add the  rows

document.querySelector('#elementForm').addEventListener('submit', async (e) => {

  e.preventDefault();
  console.log("haider");
  let elemNumber = document.querySelector("#elemNum")
  let elemValue = elemNumber.value;
  console.log(elemValue);
  for (let index = 0; index < elemValue; index++) {

    await deployElement(index)
  }
})


//the function is  used  in the above listener 

async function deployElement(index) {
  index += 1;
  let dropContainer = document.querySelector(".containerForDropElements");
  let containerElement = document.createElement("div");
  containerElement.innerHTML = `<h3>${index}</h3>`
  containerElement.classList.add('elementBox')
  dropContainer.appendChild(containerElement)
  await new Promise(resolve => setTimeout(resolve, 1000));
}



// document.getElementById('removeElement').addEventListener('click', () => {
  
//   document.querySelector()
//   let dropContainer = document.querySelector(".containerForDropElements");
//   let elementToRemove = dropContainer.querySelector(`h3:nth-of-type(${})`);

//   // Remove the element if found
//   if (elementToRemove) {
//     dropContainer.removeChild(elementToRemove);
//   }
// });