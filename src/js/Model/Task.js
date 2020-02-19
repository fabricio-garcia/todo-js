// @ts-check

/**
 * @file Object Model for a ToDo or task to be done
 * @author Israel Laguan
 * @version 1.0.0
 */

import './TypeDefs.jsdoc'

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
  let _name = name
  let _description = description
  let _priority = priority
  let _status = status

  const getName = () => _name
  const getDescription = () => _description
  const getPriority = () => _priority
  const getStatus = () => _status
  const setName = newName => {
    try {
      if (!newName) throw new Error('No Name to Set');
      _name = newName
      return{
        success: true,
        data: _name
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }
  const setDescription = newDescription => {
    try {
      if (!newDescription) throw new Error('No Description to Set');
      _description = newDescription
      return{
        success: true,
        data: _description
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }
  const setPriority = newPriority => {
    try {
      if (!newPriority) throw new Error('No Priority to Set');
      _priority = newPriority
      return{
        success: true,
        data: _priority
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }
  const setStatus = newStatus => {
    try {
      if (!newStatus) throw new Error('No Status to Set');
      _status = newStatus
      return{
        success: true,
        data: _status
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }

  return {
    name: getName(),
    description: getDescription(),
    priority: getPriority(),
    status: getStatus(),
    setName,
    setDescription,
    setPriority,
    setStatus,
  }
}

export default Task;