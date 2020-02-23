import Storage from '../js/Storage';
import Project from '../js/Model/Projects';
import Card from '../js/View/Card';

window.customElements.define('my-card', Card);

require('normalize.css/normalize.css');
require('../css/main.css');
require('./page.css');

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('project-date')
    .setAttribute('min', new Date().toISOString().split('T')[0]);
});


const form = document.getElementById('new-project-form');

form.addEventListener('submit', e => {
  try {
    e.preventDefault();
    const name = e.target['project-name'].value;
    if (!name) return Error('Please Put your name!');
    const date = e.target['project-date'].value;
    if (!date) return Error('Please Put a due date for project!');
    const description = e.target['project-description'].value;
    const thisProject = Project(name, date, description);
    const {
      success, error,
    } = Storage.add(thisProject, 'projects');
    if (!success) throw new Error(error);
    window.location = '/';
    return true;
  } catch (error) {
    return false;
  }
});
