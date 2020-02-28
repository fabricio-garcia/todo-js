// @ts-check
import template from './template';

export default class ToDo extends HTMLElement {
  constructor() {
    super();
    this.task = this.getAttribute('task');
    this.project = this.getAttribute('project');
    this.status = this.getAttribute('status');
    this.css = this.getAttribute('css');
    this.priority = this.getAttribute('priority');
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.shadowDOM
      .appendChild(template(this.css, this.status, this.priority, this.task, this.project)
        .content
        .cloneNode(true));
    this.checkbox = this.shadowDOM.getElementById('checkbox');
    this.select = this.shadowDOM.getElementById('select');
    this.checkChange = this.triggerEdit.bind(this);
  }

  connectedCallback() {
    this.checkbox.addEventListener('click', e => this.triggerEdit(e));
    this.select.addEventListener('click', e => this.triggerEdit(e));
  }

  triggerEdit(e) {
    e.target.dispatchEvent(new CustomEvent('triggerEdit', {
      bubbles: true, detail: { taskId: () => this.task },
    }));
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
      this.select.classList.add(newVal);
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