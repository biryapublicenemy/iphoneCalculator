//////Инициализация кнопок//////////////
console.log('sdad')
const zero = document.getElementById("zero");
console.log(zero);
zero.onclick = () => (input.value += zero.value);

const one = document.getElementById("one");
one.onclick = () => (input.value += one.value);

const two = document.getElementById("two");
two.onclick = () => (input.value += two.value);

const three = document.getElementById("three");
three.onclick = () => (input.value += three.value);

const four = document.getElementById("four");
four.onclick = () => (input.value += four.value);

const five = document.getElementById("five");
five.onclick = () => (input.value += five.value);

const six = document.getElementById("six");
six.onclick = () => (input.value += six.value);

const seven = document.getElementById("seven");
seven.onclick = () => (input.value += seven.value);

const eight = document.getElementById("eight");
eight.onclick = () => (input.value += eight.value);

const nine = document.getElementById("nine");
nine.onclick = () => (input.value += nine.value);

const comma = document.getElementById("comma");
comma.onclick = () => (input.value += comma.value);

const resultBtn = document.getElementById("resultBtn");
const clear = document.getElementById("clear");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const sum = document.getElementById("sum");
const substact = document.getElementById("substract");

var buttons = document.getElementsByClassName("digit-number"); // возвращает коллекцию элементов
var input = document.getElementById("input");
///динамическое изменение цвета при клике по кнопке класса digit- ///
Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 49) {
    var button = document.querySelector("#one");
    button.classList.add("clicked");
  }
});
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 49) {
    var button = document.querySelector("#one");
    setTimeout(() => button.classList.remove("clicked"), 1500);
  }
});
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 50) {
    var button = document.querySelector("#two");
    button.classList.add("clicked");
  }
});
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 50) {
    var button = document.querySelector("#two");
    setTimeout(() => button.classList.remove("clicked"), 1500);
  }
});

///настройка инпута только на цифры (буквы игнорируются)///
function checkInputBoxKey(key) {
  return (
    (key >= "0" && key <= "9") || key == "+" || key == "(" || key == ")" ||  key == "-" || 
    key == "ArrowLeft" || key == "ArrowRight" || key == "Delete" || key == "Backspace" || key == "."
    );
}
    
    ///настройка инпута на автоввод при load/////
    window.addEventListener("load", function (input) {
      var input = document.getElementById("input");
      input.focus();
    });
    
    /////Блок кода, который принимает первое число из инпута и делает его цифрой, за тем берет второе и жестко ебурит их//////////////////////
    let firstQuantity = null;
    let secondQuantity = null;
    
    //////// Инверсия цвета в кнопках операторах\\\\\\\
    function buttonSwapColors() {
      console.log(this);
      let textInputColor =window.getComputedStyle(this).getPropertyValue("color");
      let backInputColor =window.getComputedStyle(this).getPropertyValue("background-color");
      console.log(textInputColor);
      console.log(backInputColor);
      this.style.color = backInputColor;
      this.style.backgroundColor = textInputColor;
    }
    ////на каждый клик
    sum.onclick = function () {
      buttonSwapColors.call(this);
      firstQuantity = Number(input.value);
      console.log(firstQuantity);
      input.value = firstQuantity;
      input.value = null;
      resultBtn.onclick = function () {
        buttonSwapColors.call(sum);
        secondQuantity = Number(input.value);
        input.value = firstQuantity + "+" + secondQuantity;
        result = firstQuantity + secondQuantity;
        input.value = result;
      };
    };
    substract.onclick = function () {
      buttonSwapColors.call(this);
      firstQuantity = Number(input.value);
      input.value = firstQuantity;
      input.value = null;
      resultBtn.onclick = function () {
        buttonSwapColors.call(substact);
        secondQuantity = Number(input.value);
        result = firstQuantity - secondQuantity;
        input.value = result;
      };
    };

multiply.onclick = function () {
  buttonSwapColors.call(this);
  firstQuantity = Number(input.value);
  input.value = firstQuantity;
  input.value = null;
  resultBtn.onclick = function () {
    buttonSwapColors.call(multiply);
    secondQuantity = Number(input.value);
    result = secondQuantity * firstQuantity;
    input.value = result;
  };
};

divide.onclick = function () {
  buttonSwapColors.call(this);
  firstQuantity = Number(input.value);
  input.value = firstQuantity;
  input.value = null;
  resultBtn.onclick = function () {
    buttonSwapColors.call(divide);
    secondQuantity = Number(input.value);
    result = firstQuantity / secondQuantity;
    input.value = result;
  };
};

clear.onclick = function () {
  input.value = "";
  var firstQuantity = null;
  var secondQuantity = null;
  var result = null;
};
// 1)добавить точку!
//  2)стили БУРЕК ПОЧТИ ПОБЕДИЛ!!!!
//   3) бесконечное количество операций
//   4) следующий клик после резалта опусташает инпут и присваивает знаения клика
//   5) БУУРЕЕЕК НАЧАЛ  привязать клики к кнопкам клавиатуры И запретить ввод текста в инпут и сделать невозможным выход из инпута (перманетный инпут)
//   6) при нажатии на операции в первую очередь(без цифры) - ничего не происходит
//   7) вывести это на сайт BirBer.ru
//   8) перевод в проценты и отрицательные числа.
//   88) развитие в сторону инженерного калькулятора