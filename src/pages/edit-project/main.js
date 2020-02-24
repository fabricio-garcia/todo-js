import Storage from '../../js/Storage';
import Card from '../../js/View/Card';
import Project from '../../js/Model/Projects';

window.customElements.define('my-card', Card);

require('normalize.css/normalize.css');
require('../../css/main.css');
require('./page.css');

const { data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');

document.addEventListener('DOMContentLoaded', () => {
  if (data.length < 1) window.location = '/';
  document.getElementById('project-name').value = data[0].name;
  document.getElementById('project-description').value = data[0].description;
  document.getElementById('project-date').value = data[0].date;
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
    const description = e.target['project-description'].value;
    const thisProject = Project(name, date, description, data[0].id, data[0].tasks);
    const {
      success, error,
    } = Storage.update(data[0].id, thisProject, 'projects');
    if (!success) throw new Error(error);
    window.location = '/';
    return true;
  } catch (error) {
    return false;
  }
});