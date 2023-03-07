class Scores {
  constructor() {
    this.lists = [];
  }

  add = (name, score) => {
    const list = {
      name,
      score,
    };

    this.lists.push(list);
  }

  render = (items) => {
    items.innerHTML = '';

    this.lists.forEach((list) => {
      const li = `<div class="scores">
        <p class="name">${list.name}:
          <span class="score">${list.score}</span>
        </p>
      </div>`;

      items.innerHTML += li;
    });
  };

  set = () => {
    const newList = JSON.stringify(this.lists);
    localStorage.setItem('item', newList);
  };

  get = () => {
    if (localStorage.getItem('item')) {
      this.lists = JSON.parse(localStorage.getItem('item'));
    }
  };
}

export default Scores;