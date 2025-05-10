/* Находим элемент с классом document*/
let time = document.querySelector('.time');
let lightRed = document.querySelector('.traffic__lights--red');
let lightYellow = document.querySelector('.traffic__lights--yellow');
let lightGreen = document.querySelector('.traffic__lights--green');
let button =  document.querySelector('.button');
let image = document.querySelector('.image');

// Переменные
let isRunning = false;
let intervalId = null;
let count = 0;
let colorIndex = 0;
const colorArray = ['red', 'yellow', 'green', 'yellow'];
const secondsChangeColore = {
    red: 5,
    yellow: 1,
    green: 5,
};

/*Функция исходного состояние цвета*/
let resetLights = function () {
    lightRed.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
    lightYellow.style.backgroundColor = "rgba(255, 238, 0, 0.3)";
    lightGreen.style.backgroundColor = "rgba(0, 187, 16, 0.3)";
};

/*Функция, принимает аргумент color, выбирает состояние цвета, тенарный оператор*/
let setLightColor = function (color) {
    lightRed.style.backgroundColor = color === 'red' ? "rgba(255, 0, 0, 1)" : "rgba(255, 0, 0, 0.3)";
    lightYellow.style.backgroundColor = color === 'yellow' ? "rgba(255, 238, 0, 1)" : "rgba(255, 238, 0, 0.3)";
    lightGreen.style.backgroundColor = color === 'green' ? "rgba(0, 187, 16, 1)" : "rgba(0, 187, 16, 0.3)";
};

/*Функция start светофора*/
let startTrafficLight = function () {
    isRunning = true;
    count = secondsChangeColore[colorArray[colorIndex]];
    setLightColor(colorArray[colorIndex]);
    time.textContent = count;

    intervalId = setInterval (() => {
        count--;
        if (count >= 1) {
            time.textContent = count; // 5,4,3,2,1 red
        }else {
            colorIndex = (colorIndex + 1) % colorArray.length; //1,2,3,0 red
            setLightColor(colorArray[colorIndex]);
            count = secondsChangeColore[colorArray[colorIndex]];
            time.textContent = count;
        };
    }, 1000);
};

/*Функция stop светофора*/
let stopTrafficLight = function () {
    isRunning = false;
    clearInterval(intervalId);
    resetLights();
    count = 0;
    colorIndex = 0;
    time.textContent = '';
};
    
/*Функция событий*/
button.addEventListener('click', function() {
    if (!isRunning) {
        // Запускаем
        button.classList.remove('button_start');
        button.classList.add('button_stop');
        image.src = '../images/knopka_stop.png';
        startTrafficLight();
    }else {
        // Останавливаем
        button.classList.remove('button_stop');
        button.classList.add('button_start');
        image.src = '../images/knopka_start.png';
        stopTrafficLight();
    };
});

