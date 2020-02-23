import Storage from '../../js/Storage';
import Card from '../../js/View/Card';

window.customElements.define('my-card', Card);

require('normalize.css/normalize.css');
require('../../css/main.css');
require('./page.css');
require('../../js/View/task');

document.addEventListener('DOMContentLoaded', () => {
  const { success, error, data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');
  if (!success) throw new Error(error);
  if (data.length < 1) window.location = '/';
  // TODO: Check if currentTask is set
  // If not redirect to '/project'
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
