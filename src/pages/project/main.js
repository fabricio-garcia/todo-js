import ToDo from '../../js/View/ToDo';
import Storage from '../../js/Storage';
import Card from '../../js/View/Card';

window.customElements.define('my-card', Card);

require('normalize.css/normalize.css');
require('../../css/main.css');
require('./page.css');

window.customElements.define('to-do', ToDo);
const { success, error, data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');

document.addEventListener('DOMContentLoaded', () => {
  if (!success) throw new Error(error);
  if (data.length < 1) window.location = '/';
  window.localStorage.setItem('currentProject', JSON.stringify(data));
  document.getElementById('project-name').innerText = data[0].name;
  document.getElementById('project-date').value = data[0].date;
  document.getElementById('project-description').innerText = data[0].description;
  document.getElementById('new-task-link').setAttribute('href', `newTask.html?id=${data[0].id}`);
  if (data[0].tasks.length < 1) throw new Error('No tasks to show');
  const tasksList = document.getElementById('task-list');
  data[0].tasks.forEach(task => {
    tasksList.innerHTML += `
      <to-do status="${task.status}" priority="${task.priority}">
        <a href="task.html?id=${data[0].id}" role="task-link" task=${task.id}>${task.name}</a>
      </to-do>
    `;
  });
});

const todoList = document.getElementById('task-list');
todoList.addEventListener('click', e => {
  const anchor = e.srcElement;
  const role = anchor.getAttribute('role');
  if (role !== 'task-link') return;
  const taskId = Number(anchor.getAttribute('task'));
  if (!taskId) throw new Error('Id given is null');
  if (!success) throw new Error(error);
  const task = data[0].tasks.filter(item => item.id === taskId);
  window.localStorage.setItem('currentTask', JSON.stringify(task));
  window.localStorage.setItem('isTask', true);
});