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
    if (!Projects) {
      const defaultProject = {
        name: 'Add your own Projects!',
        description: `
          It's nice to procastinate, but we encourage you to
          <b>take the lead and have an active and healthy life</b>,
          <i>organizing</i> your tasks, and most importantly, <u>doing 
          them</u>! You can use 
          <b style="color: #3d6db4;">Blue Planner</b> for that! 
        `,
        id: Date.now() * Math.random(),
        date: new Date().toISOString().split('T')[0],
        tasks: [
          {
            id: Date.now() * Math.random() + 1,
            name: 'Create your own Project!',
            description: `
              You can create your own project, portraying
              things that you like and you want to have organized!
            `,
            priority: 'low',
            status: true,
          },
          {
            id: Date.now() * Math.random() + 2,
            name: 'Create Some tasks inside your project!',
            description: `
              You can create your own tasks inside each project, that way
              you can keep track of little steps!
            `,
            priority: 'medium',
            status: false,
          },
          {
            id: Date.now() * Math.random() + 3,
            name: 'Do your tasks, reach your goals!',
            description: `
              You can plan all that you want but the most important thing is 
              you to actually go and make that plans met reality! Go go go!
            `,
            priority: 'high',
            status: false,
          },
        ],
      };
      window.localStorage.setItem('projects', JSON.stringify([defaultProject]));
    }
    return { success: true, msg: 'Storage initialized!', data: Projects };
  } catch (error) {
    return { error: error.message };
  }
};

init();

export default {
  add,
  readAll,
  readOne,
  remove,
  update,
};