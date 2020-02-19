/**
 * @file Types for BluePlanner
 * @author Israel Laguan
 * @version 1.0.0
 */

/**
 * @typedef {Object} Task Task to do in a certain project
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
  * @property {Object} date Due date for complete project
  * @property {Task[]} tasks Array of tasks belonging this project
  */
