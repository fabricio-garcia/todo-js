// import Storage from '../../js/Storage';
import Card from '../../js/View/Card';

window.customElements.define('my-card', Card);

require('normalize.css/normalize.css');
require('../../css/main.css');
require('./page.css');
require('../../js/View/task');

document.addEventListener('DOMContentLoaded', () => {
  const currentProject = JSON.parse(window.localStorage.getItem('currentProject'));
  if (currentProject.length < 1) window.location = '/';
  const task = currentProject[0].tasks.filter(task => task.id === Number(window.location.search.split('id=')[1]));
  if (task.length < 1) window.location = `/project.html?id=${Number(window.location.search.split('id=')[1])}`;
  document.getElementById('task-name').innerText = task[0].name;
  document.getElementById('task-description').innerText = task[0].description;
});

document.querySelector('.edit-icon').addEventListener('click', () => {
  document.querySelector('.edit-task').removeAttribute('hidden');
  document.querySelector('.task-description').setAttribute('hidden', true);
});

const form = document.getElementById('edit-task-form');

form.addEventListener('submit', e => {
  try {
    e.preventDefault();
    const name = e.target['task-name'].value;
    if (!name) return Error('Please Put your name!');
    // const description = e.target['task-description'].value;

    // TODO: set currentTask
    // Create project Object with factory function
    // Save on local storage

    window.location = `/project?${window.location.search.split('?')[1]}`;
    return true;
  } catch (error) {
    return false;
  }
});
