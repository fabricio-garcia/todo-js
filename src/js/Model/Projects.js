// @ts-check

/**
 * @file Object Model for a ToDo or task to be done
 * @author Israel Laguan
 * @version 1.0.0
 */

import './TypeDefs.jsdoc'

/**
 * Project with a certain deadline and some tasks
 *
 * Task should have a short name, not greater than 50 characters,
 * then explain more on a long description. We must
 * define a priority for each task, and if it is completed
 *
 * @param {String} name Short description of project
 * @param {String} description Long description
 * @param {String} date Due date in ISO 8601 syntax (YYYY-MM-DD)
 * @param {Task[]} [tasks=[]] Array of tasks from Project
 * @returns {Project} Project with a certain deadline and some tasks
 */
const Project = (
  name,
  date,
  description = 'An important Project',
  tasks = [],
) => {
  let _name = name
  let _date = date || new Date().toISOString().split('T')[0]
  let _description = description
  let _tasks = tasks || []

  const getName = () => _name
  const getDate = () => _date
  const getDescription = () => _description
  const getTasks = () => _tasks
  const setName = newName => {
    try {
      if (!newName) throw new Error('No Name to Set')
      _name = newName
      return {
        success: true,
        data: _name,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  }

  const setDate = newDate => {
    try {
      if (!newDate) throw new Error('No Date to Set')
      _date = newDate
      return {
        success: true,
        data: _date,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  }

  const setDescription = newDescription => {
    try {
      if (!newDescription) throw new Error('No Description to Set')
      _description = newDescription
      return {
        success: true,
        data: _description,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  }

  const setTasks = newTasks => {
    try {
      if (!newTasks) throw new Error('No Tasks to Set')
      _tasks = newTasks
      return {
        success: true,
        data: _tasks,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  }

  return {
    name: getName(),
    description: getDescription(),
    date: getDate(),
    tasks: getTasks(),
    setName,
    setDescription,
    setDate,
    setTasks,
  }
}

export default Project;