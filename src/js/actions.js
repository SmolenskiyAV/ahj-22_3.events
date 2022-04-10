/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

const dead = document.getElementById('dead'); // поиск элемента "Убито кротов:"
const lost = document.getElementById('lost'); // поиск элемента "Промахов:"

let deadValue = 0; // начальное значение убитых кротов
let lostValue = 0; // начальное значение промахов

function countersReset(alertValue) { // функция обнуления счётчиков и вывода сообщения
  deadValue = 0;
  dead.textContent = deadValue;
  lostValue = 0;
  lost.textContent = lostValue;
  alert(alertValue);
}

export function toggleDone(event) {
  const elem = event.target;

  if (elem.classList.contains('hole_has-mole')) { // условие клика на крота в норе
    deadValue++;
    dead.textContent = deadValue;
    if (deadValue === 3) { // условие победы
      countersReset('Победа!');
    }
  } else { // условие промаха
    lostValue++;
    lost.textContent = lostValue;
    if (lostValue === 10) { // условие поражения
      countersReset('Вы проиграли!');
    }
  }
}
