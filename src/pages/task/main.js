import Storage from '../../js/Storage';
import Card from '../../js/View/Card';
import Task from '../../js/Model/Task';
import Project from '../../js/Model/Projects';

window.customElements.define('my-card', Card);

// eslint-disable-next-line import/no-unresolved
require('normalize.css/normalize.css');
require('../../css/main.css');
require('./page.css');
require('../../js/View/task');

const { data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');
const task = JSON.parse(window.localStorage.getItem('currentTask'));

document.addEventListener('DOMContentLoaded', () => {
  // TODO: compare path query with current project
  if (data.length < 1) window.location = '/';
  document.getElementById('task-name').innerText = task[0].name;
  document.getElementById('task-description').innerText = task[0].description;
});

document.querySelector('.edit-icon').addEventListener('click', () => {
  document.querySelector('.edit-task').removeAttribute('hidden');
  document.querySelector('.task-description').setAttribute('hidden', true);
  document.getElementById('edit-task-name').value = task[0].name;
  document.getElementById('edit-task-description').value = task[0].description;
});

const updateItemInArray = (id, item, array) => {
  try {
    const temp = [...array];
    let flag = true;
    let index = -1;
    for (let i = 0; flag && i < temp.length; i += 1) {
      if (temp[i].id === id) {
        index = i; flag = false;
      }
    }
    if (index > -1) {
      temp[index] = item;
    } else {
      throw new Error('The id provided was incorrect! Do you want to add it?');
    }
    return { success: true, msg: 'Element updated in Storage', data: temp };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

document.getElementById('edit-task-form').addEventListener('submit', e => {
  try {
    e.preventDefault();
    const name = e.target['edit-task-name'].value;
    if (!name) return Error('Please Put your name!');
    const description = e.target['edit-task-description'].value;
    const args = [name, description, task[0].id, task[0].priority, task[0].status];
    const thisTask = Task(...args);
    const newTasks = [...data[0].tasks];
    const updatedTasks = updateItemInArray(task[0].id, thisTask, newTasks);
    if (!updatedTasks.success) throw new Error(updatedTasks.error);
    const params = [data[0].name, data[0].date, data[0].description, data[0].id, updatedTasks.data];
    const thisProject = Project(...params);
    const {
      success, error,
    } = Storage.update(data[0].id, thisProject, 'projects');
    if (!success) throw new Error(error);

    window.location = `/project.html?${window.location.search.split('?')[1]}`;
    return true;
  } catch (error) {
    return false;
  }
});
