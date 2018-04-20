import enquire from 'enquire.js';
import PubSub from 'vanilla-pubsub';
import mq from '../../../media-queries';

/*
 * [1] Store a reference to the document event handler, so we can remove it
 * later.
 */

class MainNavigation {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll('.js-MainNavigation-link');
    this.items = this.element.querySelectorAll('.js-MainNavigation-item');
    this.docRef = this.handleDocumentClick.bind(this); /* 1. */
    this.linkRef = MainNavigation.handleLinkClick.bind(this);
    this.create();
  }

  create() {
    enquire.register(mq['--sm-md-viewport'], {
      match: () => {
        document.removeEventListener('click', this.docRef, true);

        [].slice.call(this.links).forEach((elem) => {
          elem.addEventListener('click', this.linkRef, true);
        });
      },
    });

    enquire.register(mq['--lg-viewport'], {
      match: () => {
        document.addEventListener('click', this.docRef, true);

        [].slice.call(this.links).forEach((elem) => {
          elem.removeEventListener('click', this.linkRef, true);
        });
      },
    });

    PubSub.subscribe('SearchBox.isFocused', ({ isFocused }) => {
      if (isFocused) {
        this.element.classList.add('u-hidden');
      } else {
        this.element.classList.remove('u-hidden');
      }
    });
  }

  static hideElems(elements) {
    [].slice.call(elements).forEach((element) => {
      element.classList.remove('is-open');
    });
  }

  static handleLinkClick(event) {
    const item = event.target.closest('.js-MainNavigation-item');
    const siblings = [].filter.call(item.parentNode.children, child => child !== item);

    event.preventDefault();
    item.classList.toggle('is-open');
    MainNavigation.hideElems(siblings);
  }

  handleDocumentClick(event) {
    if (!event.target.closest('.js-MainNavigation')) {
      MainNavigation.hideElems(this.items);
    }
  }
}

export default MainNavigation;
