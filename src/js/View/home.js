import { openDialog } from './DialogBox';

const projects = document.getElementById('project-list');

projects.addEventListener('click', e => {
  const button = e.srcElement;
  const role = button.getAttribute('role');
  if (role !== 'menu-delete') return;
  window.localStorage.setItem('currentProject', button.getAttribute('project'));
  window.localStorage.setItem('isTask', false);
  openDialog();
});
