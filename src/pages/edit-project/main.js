import Storage from '../../js/Storage';
import Card from '../../js/View/Card';

window.customElements.define('my-card', Card);

require('normalize.css/normalize.css');
require('../../css/main.css');
require('./page.css');

const { data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');

document.addEventListener('DOMContentLoaded', () => {
  if (data.length < 1) window.location = '/';
});

document
  .getElementById('project-date')
  .setAttribute('min', new Date().toISOString().split('T')[0]);

const form = document.getElementById('edit-project-form');

form.addEventListener('submit', e => {
  try {
    e.preventDefault();
    const name = e.target['project-name'].value;
    if (!name) return Error('Please Put your name!');
    const date = e.target['project-date'].value;
    if (!date) return Error('Please Put a due date for project!');
    // const description = e.target['project-description'].value;
    // Create project Object with factory function
    // Save on local storage

    window.location = '/';
    return true;
  } catch (error) {
    return false;
  }
});