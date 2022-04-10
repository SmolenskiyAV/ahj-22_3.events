/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
// TODO: write code here
import playField from './base';
import { toggleDone } from './actions';

playField();

document.addEventListener('DOMContentLoaded', () => { // помещаем addEventlistener внутрь обратной функции - для успешного прохождения тестов Jest
  const holeGame = document.querySelector('.hole-game'); // поиск дочерних элементов внутри родителя class = "hole-game"
  holeGame.addEventListener('click', toggleDone); // обработка события клика на один из элементов внутри родителя <div class="hole-game">
});
// for demonstration purpose only
export default function demo(value) {
  return value;
// eslint-disable-next-line eol-last
}
