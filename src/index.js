import './main.scss';
import Scores from './modules/scores';

const list = document.querySelector('.scores-container');
const submit = document.querySelector('.button');
const addScore = document.querySelector('#add-score');
const addName = document.querySelector('#add-name');

const scoreList = new Scores();

submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (addName.value.trim() && addScore.value.trim()) {
    scoreList.add(addName.value, addScore.value);
    scoreList.set();
    scoreList.render(list);
    addName.value = '';
    addScore.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  scoreList.get();
  scoreList.render(list);
});