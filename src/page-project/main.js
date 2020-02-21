import ToDo from '../js/View/ToDo';
import Storage from '../js/Storage';

require('normalize.css/normalize.css');
require('../css/main.css');
require('./page.css');

window.customElements.define('to-do', ToDo);

document.addEventListener('DOMContentLoaded', () => {
  const { success, error, data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');
  if (!success) throw new Error(error);
  document.getElementById('project-name').innerText = data[0].name;
  document.getElementById('project-date').value = data[0].date;
  document.getElementById('project-description').innerText = data[0].description;
  document.getElementById('new-task-link').setAttribute('href', `newTask.html?id=${data[0].id}`);
});
