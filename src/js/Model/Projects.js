// @ts-check

/**
 * @file Object Model for a ToDo or task to be done
 * @author Israel Laguan
 * @version 1.0.0
 */

import './TypeDefs.jsdoc';

/**
 * Project with a certain deadline and some tasks
 *
 * Task should have a short name, not greater than 50 characters,
 * then explain more on a long description. We must
 * define a priority for each task, and if it is completed
 *
 * [REQUIREMENT]
 * @name Project
 * @param {Number} id Number to identify
 * @param {String} name Short description of project
 * @param {String} description Long description
 * @param {String} date Due date in ISO 8601 syntax (YYYY-MM-DD)
 * @param {Task[]} [tasks=[]] Array of tasks from Project
 * @returns {Project} Project with a certain deadline and some tasks
 */
const Project = (
  id,
  name,
  date,
  description = 'An important Project',
  tasks = [],
) => {
  const thisid = id || Date.now() * Math.random();
  let thisname = name;
  let thisdate = date || new Date().toISOString().split('T')[0];
  let thisdescription = description;
  let thistasks = tasks || [];

  const getId = () => thisid;
  const getName = () => thisname;
  const getDate = () => thisdate;
  const getDescription = () => thisdescription;
  const getTasks = () => thistasks;

  const setName = newName => {
    try {
      if (!newName) throw new Error('No Name to Set');
      thisname = newName;
      return {
        success: true,
        data: thisname,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const setDate = newDate => {
    try {
      if (!newDate) throw new Error('No Date to Set');
      thisdate = newDate;
      return {
        success: true,
        data: thisdate,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const setDescription = newDescription => {
    try {
      if (!newDescription) throw new Error('No Description to Set');
      thisdescription = newDescription;
      return {
        success: true,
        data: thisdescription,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const setTasks = newTasks => {
    try {
      if (!newTasks) throw new Error('No Tasks to Set');
      if (!Array.isArray(newTasks)) throw new TypeError('Please provide an Array as parameter');
      thistasks = newTasks;
      return {
        success: true,
        data: thistasks,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  return {
    id: getId(),
    name: getName(),
    description: getDescription(),
    date: getDate(),
    tasks: getTasks(),
    setName,
    setDescription,
    setDate,
    setTasks,
  };
};

export default Project;