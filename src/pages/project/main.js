import ToDo from '../../js/View/ToDo';
import Storage from '../../js/Storage';
import Card from '../../js/View/Card';

window.customElements.define('my-card', Card);

require('normalize.css/normalize.css');
require('../../css/main.css');
require('./page.css');

window.customElements.define('to-do', ToDo);

document.addEventListener('DOMContentLoaded', () => {
  const { success, error, data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');
  if (!success) throw new Error(error);
  if (data.length < 1) window.location = '/';
  document.getElementById('project-name').innerText = data[0].name;
  document.getElementById('project-date').value = data[0].date;
  document.getElementById('project-description').innerText = data[0].description;
  document.getElementById('new-task-link').setAttribute('href', `newTask.html?id=${data[0].id}`);
  if (data[0].tasks.length < 1) throw new Error('No tasks to show');
  const tasksList = document.getElementById('task-list');
  data[0].tasks.forEach(task => {
    tasksList.innerHTML += `
      <to-do status="${task.status}" priority="${task.priority}">
        <a href="task.html?id='${task.id}' slot="status">${task.name}</a>
      </to-do>
    `;
  })
});