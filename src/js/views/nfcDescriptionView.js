import counterView from './counterView';

class DescriptionView {
  content = document.querySelector('.ntf__content');

  constructor() {}

  renderDescription() {
    this.content.addEventListener('click', function (e) {
      const parentEl = e.target.closest('.ntf__item');
      if (!parentEl) return;

      parentEl.classList.toggle('ntf__item--active');
      if (parentEl.classList.contains('unread')) {
        parentEl.classList.remove('unread');
        counterView.updateCounter();
        parentEl.querySelector('.red-dot').style.display = 'none';
      }
    });
  }
}

export default new DescriptionView();
