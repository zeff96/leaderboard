import './main.scss';
import setData from './modules/set';
import getData from './modules/get';
import render from './modules/render';
import { alertMsg, removeMsg } from './modules/alert';

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('#button');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  setData();
  alertMsg();
  setTimeout(removeMsg, 2000);

  document.querySelector('#add-name').value = '';
  document.querySelector('#add-score').value = '';
});

btnEl.addEventListener('click', () => {
  getData();
  render();
});

window.onload = render();