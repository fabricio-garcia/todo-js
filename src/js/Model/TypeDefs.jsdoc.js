/**
 * @file Types for BluePlanner
 * @author Israel Laguan
 * @version 1.0.0
 */

/**
 * @typedef {Object} Task Task to do in certain project
 * @property {String} name Short description of the task
 * @property {String} description long description
 * @property {('low'|'medium'|'high')} [priority='medium'] How important is to complete this task
 * @property {Boolean} [status=false] Is completed?
 * @property {Function} setName Change Name
 * @property {Function} setDescription Change Description
 * @property {Function} setPriority Change Priority
 * @property {Function} setStatus Change completed state
 */

/**
 * @typedef {Object} Project Project with a certain deadline and some tasks
 * @property {String} name Short Description of the Project
 * @property {String} description Long description
 * @property {Object} date Due date in ISO 8601 syntax (YYYY-MM-DD)
 * @property {Task[]} tasks Array of tasks belonging this project
 * @property {Function} setName Change Name
 * @property {Function} setDescription Change Description
 * @property {Function} setDate Change Date to complete Project
 * @property {Function} setTasks Update tasks from Project
 */
