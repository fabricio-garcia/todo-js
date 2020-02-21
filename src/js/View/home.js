import Storage from '../Storage';
import { openDialog } from './DialogBox';

const projects = document.getElementById('project-list');

projects.addEventListener('click', e => {
  const button = e.srcElement;
  const role = button.getAttribute('role');
  if (role !== 'menu-delete') return;

  const projectId = button.getAttribute('project');
  if (!projectId) throw new Error('Id given is null');
  const {
    success, error, data,
  } = Storage.readOne(projectId, 'projects');
  if (!success) throw new Error(error);

  window.localStorage.setItem('currentProject', data);
  window.localStorage.setItem('isTask', false);
  openDialog();
});

document.addEventListener('DOMContentLoaded', () => {
  const projects = JSON.parse(window.localStorage.getItem('projects'));
  if (projects.size < 1) return;
  projects.map((project, index) => {
    console.log(project, index);
    return project;
  });
});