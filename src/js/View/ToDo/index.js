// @ts-check
import template from './template';

export default class ToDo extends HTMLElement {
  constructor() {
    super();
    this.status = this.getAttribute('status');
    this.css = this.getAttribute('css');
    this.priority = this.getAttribute('priority');
    // eslint-disable-next-line
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    // eslint-disable-next-line
    this._shadowRoot.appendChild(template(this.css, this.status, this.priority).content.cloneNode(true));
    // eslint-disable-next-line
    this.checkbox = this._shadowRoot.getElementById('checkbox');
    // eslint-disable-next-line
    this.select= this._shadowRoot.getElementById('select');
    this.checkChange = this.checkChange.bind(this);
    this.setPriority = this.selectPriority.bind(this);
  }

  connectedCallback() {
    this.checkbox.addEventListener('change',this.checkChange);
    this.select.addEventListener('change',this.setPriority);
    
  }

  checkChange(e){
    this.setAttribute('status',e.target['checked'])
  }

  selectPriority(e){
    this.setAttribute('priority',e.target['value'].toLowerCase())
  }

  static get observedAttributes() {
    return ['status', 'priority'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name==='priority'){
      this.select.classList.remove(oldVal?oldVal:this.priority);
      this._shadowRoot.getElementById(oldVal?oldVal:this.priority).removeAttribute('selected');
      this.select.classList.add(newVal);
      return this._shadowRoot.getElementById(newVal).setAttribute('selected', 'true');
    }
    if(name==='status'){
      if (newVal==='true'){
        return this._shadowRoot.getElementById('input-title').classList.add('done')
      } else {
        return this._shadowRoot.getElementById('input-title').classList.remove('done')
      }
    }
    this[name] = newVal;
  }
  disconnectedCallback() {

  }
}