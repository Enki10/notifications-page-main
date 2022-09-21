class CounterView {
  counter = document.querySelector('.ntf__unread-count');

  constructor() {}

  updateCounter() {
    this.counter.innerText = +this.counter.innerText - 1;
  }

  clearCounter() {
    this.counter.innerText = '0';
  }
}

export default new CounterView();
