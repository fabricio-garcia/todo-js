import { project, task } from '../js/Model';
import Storage from '../js/Storage';
import Card from '../js/View/Card';

window.customElements.define('my-card', Card);

require('normalize.css/normalize.css');
require('../css/main.css');
require('./page.css');

const { data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');

document.addEventListener('DOMContentLoaded', () => {
  if (data.length < 1) window.location = '/';
});

const form = document.getElementById('edit-task-form');

form.addEventListener('submit', e => {
  try {
    e.preventDefault();
    const name = e.target['task-name'].value;
    if (!name) return Error('Please Put your name!');
    const description = e.target['task-description'].value;
    const thisTask = task(name, description);
    const newTasks = [...data[0].tasks];
    newTasks.push(thisTask);
    const params = [data[0].name, data[0].date, data[0].description, data[0].id, newTasks];
    const thisProject = project(...params);
    const {
      success, error,
    } = Storage.update(data[0].id, thisProject, 'projects');
    if (!success) throw new Error(error);
    window.location = `/project.html?id=${Number(window.location.search.split('id=')[1])}`;
    return true;
  } catch (error) {
    alert(`Something went wrong: ${error.message}`);
    return false;
  }
});