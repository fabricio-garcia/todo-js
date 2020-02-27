import { project, task } from '../Model';
import Storage from '../Storage';
import Card from './Card';

window.customElements.define('my-card', Card);
const { data } = Storage.readOne(Number(window.location.search.split('id=')[1]), 'projects');
const form = document.getElementById('edit-task-form');

document.addEventListener('DOMContentLoaded', () => {
  if (data.length < 1) window.location = '/';
});

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
    return false;
  }
});