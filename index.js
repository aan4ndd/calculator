// user enters a number with buttons
// when user clicks on any of the operator the individual inputs are combined to form input1
// the numbers inputted after the operator is pressed is recorded as input2 when the equal sign or another operator is pressed
// if another operator is pressed after input 2 , the calculation is performed and the result is stored as the first input and further calculations are carried out
// else if the equal sign is pressed the result is displayed and the result is assigned input1 for further calculations


// REVISIT EVENT LISTENERS

let input1 = '';
let input2 = '';
let operator = '';

const display = document.getElementById("display");
const keys = document.querySelector(".keys")

const add = (a, b) => a + b;
const subtract = (a, b ) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) =>{
    if(b == 0){
        return undefined;
    }
    else{
       return a / b;

    }
}

function operate(input1, operator, input2){
    switch(operator){
        case "+":
           return add(input1, input2);

        case "-":
           return subtract(input1, input2);

        case "x":
           return multiply(input1, input2);

        case "/":
           return divide(input1, input2);

        default:
            undefined;
    }
}

keys.addEventListener('click', e =>{
 if (!e.target.matches("button")) return;
 
 if (e.target.matches(".number")){ 
   if(!operator){  
    input1 += e.target.textContent

    console.log(input1)
   
    display.textContent = input1
   }

   else{
      input2 += e.target.textContent

      console.log(input2)

      display.textContent = input2
   }
 }
if(e.target.matches(".operator")){
   if(input1 !== "" && input2 !== "" && operator !== ""){
      let result = operate(Number(input1), operator,Number(input2));
      input1 = result;
      input2 = "";
      operator = e.target.textContent;   
      display.textContent = input1;

   } else{ 
     operator = e.target.textContent;
     display.textContent = operator;
   }
   }

if(e.target.matches(".equal")){
   if(input1 && input2 && operator){

   
     let result = operate(Number(input1), operator, Number(input2));
     display.textContent = result;
     input1 = result;
     input2 = "";

   
}
}

if(e.target.matches(".clear")){
   input1 = "";
   input2 = "";
   operator = "";

   display.textContent = "";
   
}

})