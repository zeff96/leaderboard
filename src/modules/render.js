import getData from './get';

const listEl = document.querySelector('.scores-container');

const render = async () => {
  listEl.innerHTML = '';
  const items = await getData();
  items.result.forEach((item) => {
    const li = `<div class="scores">
      <p class="name">${item.user}:
        <span class="score">${item.score}</span>
      </p>
    </div>`;
    listEl.insertAdjacentHTML('beforeend', li);
  });
};

export default render;