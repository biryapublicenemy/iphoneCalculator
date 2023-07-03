//настройка инпута только на цифры///
function checkInputBoxKey(key) {
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
      key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
  }
  ////////////////////////////////////////
  
  ///настройка инпута на автоввод при load/////
  window.addEventListener('load', function() {  var input = document.getElementById('input');  input.focus();});
  //////Инициализация кнопок//////////////
  
  const zero = document.getElementById('zero');
  zero.onclick = () => (document.getElementById('input').value += zero.value);  
  
  const one = document.getElementById('one');
  one.onclick = () => (document.getElementById('input').value += one.value);  
  
  const two = document.getElementById('two');
  two.onclick = () => (document.getElementById('input').value += two.value);  
  
  const three = document.getElementById('three');
  three.onclick = () => (document.getElementById('input').value += three.value);  
  
  const four = document.getElementById('four');
  four.onclick = () => (document.getElementById('input').value += four.value);  
  
  const five = document.getElementById('five');
  five.onclick = () => (document.getElementById('input').value += five.value);  
  
  const six = document.getElementById('six');
  six.onclick = () => (document.getElementById('input').value += six.value);  
  
  const seven = document.getElementById('seven');
  seven.onclick = () => (document.getElementById('input').value += seven.value);  
  
  const eight = document.getElementById('eight');
  eight.onclick = () => (document.getElementById('input').value += eight.value);  
  
  const nine = document.getElementById('nine');
  nine.onclick = () => (document.getElementById('input').value += nine.value);  
  
  
  const resultBtn = document.getElementById('resultBtn');
  const clear = document.getElementById('clear');
  const multiply = document.getElementById('multiply');
  const divide = document.getElementById('divide');
  const sum = document.getElementById('sum');
  const substact = document.getElementById('substract');
  
  //////Инициализация кнопок//////////////
  
  /////Блок кода, который принимает первое число из инпута и делает его цифрой, за тем берет второе и жестко ебурит их//////////////////////
  let firstQuantity = null;
  let secondQuantity = null;
  
  function slicer (){
      console.log(input.value + ' - input'); 
      let index = text.indexOf(symbol);
      console.log(index);
      if (index !== -1) {
          var sliced = text.slice(index + 1);
          console.log(sliced + ' - sliced');
          return sliced;
      }        else {
          return text;
      }
  }
  
  sum.onclick = function () {
      firstQuantity = Number(input.value);
      input.value = firstQuantity + '+';
      console.log(firstQuantity);
      console.log(secondQuantity);
      resultBtn.onclick = function () {
          text = input.value;
          symbol='+';
          sliced =  slicer(text, symbol);
          console.log(sliced);
          secondQuantity = Number(sliced);
          console.log(secondQuantity + ' - secondQuantity');
          input.value = firstQuantity + '+' + secondQuantity;
          result = firstQuantity+secondQuantity;
          input.value = result;
          
      }
  }
  substract.onclick = function () {
      firstQuantity = Number(input.value);
      input.value = firstQuantity + '-';
      console.log(firstQuantity);
      console.log(secondQuantity);
      resultBtn.onclick = function () {
          text = input.value;
          symbol='-';
          sliced =  slicer(text, symbol);
          secondQuantity = Number(sliced);
          console.log(secondQuantity);
          result = firstQuantity-secondQuantity  ;
          input.value = result;
          
      }
  }
  
  multiply.onclick = function () {
      firstQuantity = Number(input.value);
      input.value = firstQuantity + '*' ;
      console.log(firstQuantity);
      console.log(secondQuantity);
      resultBtn.onclick = function () {
          text = input.value;
          symbol='*';
          sliced =  slicer(text, symbol);
          secondQuantity = Number(sliced);
          console.log(secondQuantity);
          result = secondQuantity * firstQuantity;
          input.value = result;
          
      }
  }
  
  divide.onclick = function () {
      firstQuantity = Number(input.value);
      input.value = firstQuantity + '/' ;
      console.log(firstQuantity);
      console.log(secondQuantity);
      resultBtn.onclick = function () { 
          text = input.value;
          symbol='/';
          sliced =  slicer(text, symbol);
          secondQuantity = Number(sliced);
          console.log(secondQuantity);
          result = firstQuantity / secondQuantity;
          input.value = result;
          
      }
  }
  
  clear.onclick = function () {
      input.value = '';
      var firstQuantity = null;
      var secondQuantity = null;
      var result = null;
   }