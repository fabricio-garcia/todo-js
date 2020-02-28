// @ts-check

/**
 * @file Read all elements from some Item in localStorage that is Array
 * @author Israel Laguan
 * @version 1.0.0
 */

import '../Model/TypeDefs.jsdoc';

/**
 * Must return the array on localStorage with given name
 * @param {String} storageName Name of Item in localStorage
 * @returns {CRUDResponse } Object with valuable info
 */
const readAll = storageName => {
  try {
    const myLibrary = JSON.parse(window.localStorage.getItem(storageName));
    return { success: true, msg: 'Storage retrieved!', data: myLibrary };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default readAll;