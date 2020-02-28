import Storage from '../Storage';
import Card from './Card';
import Task from '../Model/Task';
import Project from '../Model/Projects';
import { openDialog } from './DialogBox';

const priorityDescription = {
  low: 'They can wait, but not forget to make them, atom by atom our world is done!',
  medium: 'Please take time to finish this!',
  high: 'What are you waiting for?! Go and complete this!',
};

window.customElements.define('my-card', Card);
const { data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');
const task = JSON.parse(window.localStorage.getItem('currentTask'));

document.addEventListener('DOMContentLoaded', () => {
  if (data.length < 1) window.location = '/';
  document.getElementById('task-name').innerText = task[0].name;
  document.getElementById('task-description').innerText = task[0].description.trim();
  document.getElementById('priority').innerText += task[0].priority.toUpperCase();
  document.getElementById('priority-description').innerHTML = priorityDescription[task[0].priority];
  document.getElementById('priority').classList.add(task[0].priority);
  document.getElementById('status').innerText += task[0].status ? 'Finished' : 'Not Finished';
});

document.getElementById('erase-icon').addEventListener('click', () => {
  openDialog();
});

document.querySelector('.edit-icon').addEventListener('click', () => {
  document.querySelector('.edit-task').removeAttribute('hidden');
  document.querySelector('.task-description').setAttribute('hidden', true);
  document.getElementById('edit-task-name').value = task[0].name;
  document.getElementById('edit-task-description').value = task[0].description.trim();
  document.getElementById('edit-task-priority').setAttribute('class', `priority ${task[0].priority}`);
  document.querySelector(`select>option#${task[0].priority}`).setAttribute('selected', true);
  document.getElementById('edit-task-status').checked = task[0].status;
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
    const priority = e.target['edit-task-priority'].value;
    const status = e.target['edit-task-status'].checked;
    const args = [name, description, task[0].id, priority, status];
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
