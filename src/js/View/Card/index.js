import template from './template';

export default class Card extends HTMLElement {
  constructor() {
    super();
    this.date = this.getAttribute('date');
    this.css = this.getAttribute('css');
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.shadowDOM
      .appendChild(template(this.css, this.date)
        .content
        .cloneNode(true));
  }
}
