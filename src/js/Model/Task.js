// @ts-check

/**
 * @file Object Model for a ToDo or task to be done
 * @author Israel Laguan
 * @version 1.0.0
 */

import './TypeDefs.jsdoc';

/**
 * Task to be completed in certain project
 *
 * Task should have a short name, not greater than 50 characters,
 * then explain more on a long description. We must
 * define a priority for each task, and if it is completed
 *
 * @param {String} name Short description of the task
 * @param {String} description long description
 * @param {('low'|'medium'|'high')} [priority='medium'] How important is to complete this task
 * @param {Boolean} [status=false] Is completed?
 * @returns {Task} Task Object belonging to certain project
 */
function Task(name, description, priority = 'medium', status = false) {
  let thisname = name;
  let thisdescription = description;
  let thispriority = priority;
  let thisstatus = status;

  const getName = () => thisname;
  const getDescription = () => thisdescription;
  const getPriority = () => thispriority;
  const getStatus = () => thisstatus;
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
  const setPriority = newPriority => {
    try {
      if (!newPriority) throw new Error('No Priority to Set');
      thispriority = newPriority;
      return {
        success: true,
        data: thispriority,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  };
  const setStatus = newStatus => {
    try {
      if (!newStatus) throw new Error('No Status to Set');
      thisstatus = newStatus;
      return {
        success: true,
        data: thisstatus,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  };

  return {
    name: getName(),
    description: getDescription(),
    priority: getPriority(),
    status: getStatus(),
    setName,
    setDescription,
    setPriority,
    setStatus,
  };
}

export default Task;