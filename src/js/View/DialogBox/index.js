
console.log('hello');

const dialog = document.getElementById('dialogCont');

const removeEvent = (item) => {
  console.log(item, 'Is deleted');
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
  const isProject = JSON.parse(window.localStorage.getItem('isTask'));
  if (isProject === false) {
    const currentProject = window.localStorage.getItem('currentProject');
    removeEvent(currentProject);
    window.localStorage.removeItem('currentProject');
  } else {
    const currentTask = window.localStorage.getItem('currentTask');
    removeEvent(currentTask);
    window.localStorage.removeItem('currentTask');
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