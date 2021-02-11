// grab DOM elements

// set event listeners on each button, do math, and update DOM



// addition
const addOne = document.getElementById('add1-input');
const addTwo = document.getElementById('add2-input');
const addButton = document.getElementById('add-nums');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
//    console.log('add button works!');
    addResult.textContent = Number(addOne.value) + Number(addTwo.value);

});

//subtraction
const subOne = document.getElementById('sub1-input');
const subTwo = document.getElementById('sub2-input');
const subButton = document.getElementById('sub-nums');
const subResult = document.getElementById('sub-result')

subButton.addEventListener('click', () => {
//   console.log('sub button works!');
    subResult.textContent = Number(subOne.value) - Number(subTwo.value);
  });

//mulitiplication
const mulOne = document.getElementById('mul1-input');
const mulTwo = document.getElementById('mul2-input');
const mulButton = document.getElementById('mul-nums');
const mulResult = document.getElementById('mul-result');

mulButton.addEventListener('click', () => {
//        console.log('multiply button works!');
        mulResult.textContent = Number(mulOne.value) * Number(mulTwo.value);
  });

//division
const divOne = document.getElementById('div1-input');
const divTwo = document.getElementById('div2-input');
const divButton = document.getElementById('div-nums');
const divResult = document.getElementById('div-result');

divButton.addEventListener('click', () => {
//    console.log('div button works!');
    divResult.textContent = Number(divOne.value) / Number(divTwo.value);
});







