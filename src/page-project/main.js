import ToDo from '../js/View/ToDo'
require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')

window.customElements.define('to-do', ToDo)

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-about')
})
