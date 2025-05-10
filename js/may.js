/* Находим элемент с классом .time в документе*/
/* Находим элементы светофора для красного, жёлтого и зелёного света по классам*/

// let time = document.querySelector('.time');
// let lightRed = document.querySelector('.light_red-faded');
// let lightYellow = document.querySelector('.light_yellow-faded');
// let lightGreen = document.querySelector('.light_green-faded');
// let button =  document.querySelector('.button');
// let image = document.querySelector('.image');

// /*Создаём переменные */
// let isRunning = false;
// let timerId = null;
// let intervalId = null;
// let total = 1;
// let currentIndex = 0;
// let colorArray = ['red', 'yellow', 'green', 'yellow'];
// const timings = {
//     red: 5000,
//     yellow: 1000,
//     green: 5000,
// }

// /*Функция, которая принимает текущий цвет как аргумент, внутри используем тенарный оператор*/

// const checksСolor = function (color) {
//     lightRed.style.backgroundColor = color === 'red' ? "rgba(255, 0, 0, 1)" : "rgba(255, 0, 0, 0.3)";
//     lightYellow.style.backgroundColor = color === 'yellow' ? "rgba(255, 238, 0, 1)" : "rgba(255, 238, 0, 0.3)";
//     lightGreen.style.backgroundColor = color === 'green' ? "rgba(0, 187, 16, 1)" : "rgba(0, 187, 16, 0.3)";  
// }

// const СolorOriginal = function () {
//     lightRed.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
//     lightYellow.style.backgroundColor = "rgba(255, 238, 0, 0.3)";
//     lightGreen.style.backgroundColor = "rgba(0, 187, 16, 0.3)";
// }

// /*Основная функция для смены цвета, Используется рекурсия с setTimeout для гибкого управления таймингами  */

// const changesColorTrafficLight = function () {
//     let color = colorArray[currentIndex];
//     console.log(color);
//     checksСolor(color);

//     if (!isRunning) {
//         return;
//     }

//     timerId = setTimeout(() => {
//         console.log(currentIndex);
//         if (currentIndex >= 3) {
//             currentIndex = 0;
//         }else {
//             currentIndex = currentIndex + 1;
//         }
//         changesColorTrafficLight();
       
//     }, timings[color]);
// };

// button.addEventListener('click', function() {
//     let ClassStart = button.classList.contains('button_start'); 
    
//     if (ClassStart) {
//         intervalId = setInterval(function() {
//             if (total <= 5) {
//                 time.textContent = total;
//                 total++
//             }else {
//                 total = 1;
//             }
//         }, 1000)

//         button.classList.remove('button_start');
//         button.classList.add('button_stop');
//         image.src = '/images/knopka_stop.png';
//         isRunning = true;
//         changesColorTrafficLight();
//     }else {
//         button.classList.remove('button_stop');
//         button.classList.add('button_start');
//         image.src = '/images/knopka_start.png';
//         time.textContent = "";
//         currentIndex = 0;
//         total = 1;
//         colorArray = ['red', 'yellow', 'green', 'yellow'];
//         isRunning = false;
//         clearTimeout(timerId);
//         clearInterval(intervalId);
//         СolorOriginal();
//     }
// });