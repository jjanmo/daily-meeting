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
const $controller = document.querySelector('.controller');

$startBtn.addEventListener('click', (e) => {
  e.target.classList.add('hidden');
  $controller.classList.remove('hidden');
  renderLabels(dev, order);
  order.forEach((_, index) => {
    renderLine(index);
  });
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

function renderLine(posX) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.moveTo(60 + 120 * posX, 30);
  ctx.lineTo(60 + 120 * posX, 770);
  ctx.stroke();
}
