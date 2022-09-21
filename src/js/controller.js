'use strict';
import descriptionView from './views/nfcDescriptionView';
import readAllView from './views/readAllView';

const loadUnreadMarker = function () {
  const items = document.querySelectorAll('.ntf__item');
  items.forEach(item => {
    if (item.classList.contains('unread')) {
      const newEl = document.createElement('div');
      newEl.classList.add('red-dot');
      item.insertAdjacentElement('beforeend', newEl);
    }
  });
};

const init = function () {
  loadUnreadMarker();
  descriptionView.renderDescription();
  readAllView.markAllRead();
};

init();
