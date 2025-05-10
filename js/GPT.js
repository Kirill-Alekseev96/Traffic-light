let time = document.querySelector('.time');
let lightRed = document.querySelector('.light_red-faded');
let lightYellow = document.querySelector('.light_yellow-faded');
let lightGreen = document.querySelector('.light_green-faded');
let button = document.querySelector('.button');
let image = document.querySelector('.image');

let isRunning = false;
let timerId = null;
let colorIndex = 0;
let count = 0;

const colorArray = ['red', 'yellow', 'green', 'yellow'];
const timings = {
    red: 5,
    yellow: 1,
    green: 5,
}

function setLightColor(color) {
    lightRed.style.backgroundColor = color === 'red' ? "rgba(255, 0, 0, 1)" : "rgba(255, 0, 0, 0.3)";
    lightYellow.style.backgroundColor = color === 'yellow' ? "rgba(255, 238, 0, 1)" : "rgba(255, 238, 0, 0.3)";
    lightGreen.style.backgroundColor = color === 'green' ? "rgba(0, 187, 16, 1)" : "rgba(0, 187, 16, 0.3)";
}

function resetLights() {
    lightRed.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
    lightYellow.style.backgroundColor = "rgba(255, 238, 0, 0.3)";
    lightGreen.style.backgroundColor = "rgba(0, 187, 16, 0.3)";
}

function startTrafficLight() {
    isRunning = true;
    colorIndex = 0;
    count = timings[colorArray[colorIndex]];
    setLightColor(colorArray[colorIndex]);
    time.textContent = count;
    
    timerId = setInterval(() => {
        count--;
        if (count >= 1) {
            time.textContent = count;
        } else {
            // Переходим к следующему цвету
            colorIndex = (colorIndex + 1) % colorArray.length;
            const currentColor = colorArray[colorIndex];
            setLightColor(currentColor);
            count = timings[currentColor];
            time.textContent = count;
        }
    }, 1000);
}

function stopTrafficLight() {
    isRunning = false;
    clearInterval(timerId);
    resetLights();
    time.textContent = "";
    colorIndex = 0;
    count = 0;
}

button.addEventListener('click', () => {
    if (!isRunning) {
        // Запускаем
        button.classList.remove('button_start');
        button.classList.add('button_stop');
        image.src = '/images/knopka_stop.png';
        startTrafficLight();
    } else {
        // Останавливаем
        button.classList.remove('button_stop');
        button.classList.add('button_start');
        image.src = '/images/knopka_start.png';
        stopTrafficLight();
    }
});