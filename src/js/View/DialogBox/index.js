import remove from '../../Storage/remove';

const dialog = document.getElementById('dialogCont');

const removeEvent = (item, storageName) => {
  const { success, error } = remove(item.id, storageName);
  if (!success) throw new Error(error);
};

export const openDialog = () => {
  dialog.style.top = '50%';
  dialog.style.opacity = 1;
  document.getElementById('freezed-layer').style.display = '';
};

document.getElementById('cancel').addEventListener('click', () => {
  dialog.style.top = '-50%';
  dialog.style.opacity = 0;
  document.getElementById('freezed-layer').style.display = 'none';
});

document.getElementById('confirm').addEventListener('click', () => {
  dialog.style.top = '-50%';
  dialog.style.opacity = 0;
  document.getElementById('freezed-layer').style.display = 'none';
  const isTask = JSON.parse(window.localStorage.getItem('isTask'));
  if (isTask) {
    const currentTask = window.localStorage.getItem('currentTask');
    removeEvent(currentTask);
    window.localStorage.removeItem('currentTask');
  } else {
    const currentProject = JSON.parse(
      window.localStorage.getItem('currentProject'),
    );
    removeEvent(currentProject, 'projects');
    window.localStorage.removeItem('currentProject');
  }
  window.location.reload(true);
});

export const DialogAsNotification = (type, message) => {
  dialog.style.top = '50%';
  dialog.style.opacity = 1;
  document.getElementById('freezed-layer').style.display = '';
  document.getElementById('dialog-header').innerText = type;
  document.getElementById('dialog-body').innerText = message;
};
