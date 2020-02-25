import Project from '../../Model/Projects';
import storage from '../../Storage';

const dialog = document.getElementById('dialogCont');

const removeFromArray = (id, array) => {
  try {
    const temp = [...array];
    let index = -1;
    temp.forEach((b, i) => {
      if (b.id === id) index = i;
    });
    if (index > -1) {
      temp.splice(index, 1);
    } else {
      throw new Error('The element with the given id is not in the Storage. Do you want to add it?');
    }
    return { success: true, msg: 'Element removed from Storage', data: temp };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const removeEvent = (item, storageName) => {
  const { success, error } = storage.remove(item.id, storageName);
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
  const currentProject = JSON.parse(
    window.localStorage.getItem('currentProject'),
  );
  dialog.style.top = '-50%';
  dialog.style.opacity = 0;
  document.getElementById('freezed-layer').style.display = 'none';
  const isTask = JSON.parse(window.localStorage.getItem('isTask'));
  if (isTask) {
    const currentTask = JSON.parse(window.localStorage.getItem('currentTask'));
    const newTasks = removeFromArray(currentTask[0].id, currentProject[0].tasks);
    const args = [
      currentProject[0].name,
      currentProject[0].date,
      currentProject[0].description,
      currentProject[0].id, newTasks.data];
    const thisProject = Project(...args);
    const {
      success, error,
    } = storage.update(thisProject.id, thisProject, 'projects');
    if (!success) throw new Error(error);
    window.localStorage.removeItem('currentTask');
    window.location = `/project.html?${window.location.search.split('?')[1]}`;
  } else {
    removeEvent(currentProject, 'projects');
    window.localStorage.removeItem('currentProject');
    window.location.reload(true);
  }
});

export const DialogAsNotification = (type, message) => {
  dialog.style.top = '50%';
  dialog.style.opacity = 1;
  document.getElementById('freezed-layer').style.display = '';
  document.getElementById('dialog-header').innerText = type;
  document.getElementById('dialog-body').innerText = message;
};
