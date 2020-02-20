import { openDialog } from './DialogBox';

document.getElementById('erase-icon').addEventListener('click', e => {
  window.localStorage.setItem('currentTask', e.srcElement.getAttribute('task'));
  window.localStorage.setItem('isTask', true);
  openDialog();
});
