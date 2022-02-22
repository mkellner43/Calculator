const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const acButton = document.querySelector('[data-all-clear]');
let currentOperandTextElement = document.querySelector('[data-current-operand]');
let previousOperandTextElement = document.querySelector('[data-previous-operand]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equals]');
let display = document.querySelector('.display');
let operators = undefined;
let num1 = undefined;
let num2 = undefined;
let answer = undefined;
display.textContent = '0';



function getNumber() {
  number.forEach(num => {
    num.addEventListener('click', () => {
      
      if(operators === undefined) {
        if(currentOperandTextElement.textContent.includes('.') 
        && num.innerHTML === '.') {
          return;
        } else if(num2 === undefined && operators === undefined && answer !== undefined) {
          clear();
        }if(display.textContent.length < 11){
        num1 = parseFloat(currentOperandTextElement.textContent += num.textContent);
        display.textContent = num1;
        }
      }else if (num1 !== undefined && operators !== undefined) {
        if(previousOperandTextElement.textContent.includes('.') 
        && num.innerHTML === '.') {
          return;
        } if(display.textContent.length < 11){
        num2 = parseFloat(previousOperandTextElement.textContent += num.textContent);
        display.textContent = num2;
         }
        }
      })
    });
  };

  getNumber();
  





  operation.forEach(operator => {
  operator.addEventListener('click', () => {
    if(operators === undefined || num2 === undefined){
    operators = operator.textContent;
    } else if(operators !== undefined && operators !== "%" && num2 !== undefined)  {
       operate();
       operators = operator.textContent;
       if(operators === "%") {
         operate();
       }
      } else if(operators === "%") {
        operate();
      };
      if(operators === "%") {
        operate();
      }
    }); 
  });




  acButton.addEventListener('click', () => {
    currentOperandTextElement.textContent = '';
    previousOperandTextElement.textContent = '';
    display.textContent = '0';
    num1 = undefined;
    num2 = undefined;
    answer = undefined;
    operators = undefined; 
  });

  function clear() {
    currentOperandTextElement.textContent = '';
    previousOperandTextElement.textContent = '';
    display.textContent = '0';
    num1 = undefined;
    num2 = undefined;
    answer = undefined;
    operators = undefined; 
  };
 



  deleteButton.addEventListener('click', () => {
     let newDisplay = display.textContent;
     if(num1 !== undefined && num2 === undefined){
     newDisplay = parseFloat(display.textContent.substring(0, display.textContent.length -1));
     currentOperandTextElement.textContent = newDisplay;
     num1 = newDisplay;
     } else {
     newDisplay = parseFloat(display.textContent.substring(0, display.textContent.length -1));
      previousOperandTextElement.textContent = newDisplay;
      num2 = newDisplay;
     } 
     
     if(isNaN(newDisplay) || newDisplay === '') {
        newDisplay = 0;
        num2 = undefined;
        num1 = undefined;
     }
     return display.textContent = newDisplay;
  })

  function equal() { 
    equalButton.addEventListener('click', () => {operate()}
   )};

    equal();
  


  function operate() { 
    if(operators === '+'){
      answer = num1 + num2;
      display.textContent = answer; 
       
    } else if (operators === '-'){
      answer = num1 - num2; 
      display.textContent = answer; 
         
     } else if (operators === '/'){
      answer = num1 / num2; 
      display.textContent = answer; 
         
     } else if (operators === '*'){
      answer = num1 * num2; 
      display.textContent = answer; 
         
     } else if (operators === '%'){
       if(num1 !== undefined && num2 === undefined || answer !== undefined){
          answer = num1/100;
          display.textContent = answer;
      }
    }
     num1 = answer;
     num2 = undefined;
     operators = undefined;
     previousOperandTextElement.textContent = '';
     return console.log(num1, operators, num2)
  };

  operate();