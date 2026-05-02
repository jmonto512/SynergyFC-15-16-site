class SmoothScroller {
  constructor(selector) {
    this.links = document.querySelectorAll(selector);
  }

  init() {
    this.links.forEach(link =>
      link.addEventListener('click', this.#handleClick.bind(this))
    );
  }

  #handleClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add new UI behaviors here without modifying existing classes
class App {
  static init() {
    new SmoothScroller('a[href^="#"]').init();
  }
}

document.addEventListener('DOMContentLoaded', () => App.init());
