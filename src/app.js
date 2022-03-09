import { suffle } from './helpers.js';

const canvas = document.getElementById('ladder_canvas');
const ctx = canvas.getContext('2d');

const dev = [
  '김흥수',
  '김연구',
  '박준성',
  '박주운',
  '양현석',
  '양찬모',
  '이화랑',
  '임경희',
  '한지선',
  '허재영',
];
const order = Array.from({ length: dev.length }, (x, i) => i + 1);

// console.log(order, suffle(order));

const $container = document.querySelector('.container');
const $startBtn = document.querySelector('#game_start_btn');
$startBtn.addEventListener('click', (e) => {
  // 1) button 사라짐
  // 2) 사다리 만들어짐
  e.target.style.display = 'none';
  renderLabels(dev, order);
});

function renderLabels(dev, order) {
  let start = '',
    end = '';
  dev.forEach((name, index) => {
    start += `<div class="label">${name}</div>`;
    end += `<div class="label">${order[index]}</div>`;
  });

  $container.innerHTML = `<div class="start-row">${start}</div><div class="end-row">${end}</div>`;
}
