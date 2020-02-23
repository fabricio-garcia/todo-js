// @ts-check
import template from './template';

export default class ToDo extends HTMLElement {
  constructor() {
    super();
    this.status = this.getAttribute('status');
    this.css = this.getAttribute('css');
    this.priority = this.getAttribute('priority');
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.shadowDOM
      .appendChild(template(this.css, this.status, this.priority)
        .content
        .cloneNode(true));
    this.checkbox = this.shadowDOM.getElementById('checkbox');
    this.select = this.shadowDOM.getElementById('select');
    this.checkChange = this.checkChange.bind(this);
    this.setPriority = this.selectPriority.bind(this);
  }

  connectedCallback() {
    this.checkbox.addEventListener('change', this.checkChange);
    this.select.addEventListener('change', this.setPriority);
  }

  checkChange(e) {
    this.setAttribute('status', e.target.checked);
  }

  selectPriority(e) {
    this.setAttribute('priority', e.target.value.toLowerCase());
  }

  static get observedAttributes() {
    return ['status', 'priority'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'priority') {
      this.select.classList.remove(oldVal || this.priority);
      this.shadowDOM.getElementById(oldVal || this.priority).removeAttribute('selected');
      this.select.classList.add(newVal);
      this.shadowDOM.getElementById(newVal).setAttribute('selected', 'true');
      return;
    }
    if (name === 'status') {
      if (newVal === 'true') {
        this.shadowDOM.getElementById('input-title').classList.add('done');
        return;
      }
      this.shadowDOM.getElementById('input-title').classList.remove('done');
      return;
    }
    this[name] = newVal;
  }
}