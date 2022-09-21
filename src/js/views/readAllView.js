import counterView from './counterView';

class ReadView {
  readBtn = document.querySelector('.ntf__read-button');

  constructor() {}

  markAllRead() {
    this.readBtn.addEventListener('click', function (e) {
      const allEl = document.querySelectorAll('.ntf__item');
      allEl.forEach(item => {
        item.classList.remove('unread');
        counterView.clearCounter();
        item.querySelector('.red-dot').style.display = 'none';
      });
    });
  }
}

export default new ReadView();
