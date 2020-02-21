// @ts-check

/**
 * @file Provide functions to manipulate Items from Local Storage
 * @author Israel Laguan
 * @version 1.0.0
 */
import add from './add';
import readAll from './readAll';
import readOne from './readOne';
import update from './update';
import remove from './remove';

const init = () => {
  try {
    const Projects = JSON.parse(window.localStorage.getItem('projects'));
    if (!Projects) window.localStorage.setItem('projects', JSON.stringify([]));
    const Tasks = JSON.parse(window.localStorage.getItem('tasks'));
    if (!Tasks) window.localStorage.setItem('tasks', JSON.stringify([]));
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
  remove,
  update,
};