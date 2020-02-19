import add from './add';
import readAll from './readAll';
import readOne from './readOne';
import update from './update';
import remove from './remove';

const init = storage => {
  try {
    const Projects = JSON.parse(window.localStorage.getItem('projects'));
    if (!Projects) storage.setItem('projects', JSON.stringify([]));
    const Tasks = JSON.parse(window.localStorage.getItem('tasks'));
    if (!Tasks) storage.setItem('tasks', JSON.stringify([]));
    return { success: true, msg: 'Storage initialized!', data: [Projects, Tasks] };
  } catch (error) {
    return { error: error.message };
  }
};

const {
  success, error, msg, data,
} = init();
if (!success) console.error(error);
console.info(msg, data);

export default {
  add,
  readAll,
  readOne,
  update,
  remove,
};