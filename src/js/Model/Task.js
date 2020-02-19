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
 * define a priority for each task, and if is completed
 * 
 * @param {String} name 
 * @param {String} description 
 * @param {('low'|'medium'|'high')} [priority='medium']
 * @param {Boolean} [status=false]
 * @returns {Task}
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
    if (newName) _name = newName
  }
  const setDescription = newDescription => {
    if (newDescription) _description = newDescription
  }
  const setPriority = newPriority => {
    if (newPriority) _priority = newPriority
  }
  const setStatus = newStatus => {
    if (newStatus) _status = newStatus
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