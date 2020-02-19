// @ts-check

/**
 * @file Read all elements from some Item in localStorage that is Array
 * @author Israel Laguan
 * @version 1.0.0
 */

import '../Model/TypeDefs.jsdoc';

/**
 * Must return the element inside an Array Item on localStorage with given name
 * @param {Number} id Identifier of Object inside Storage Item Array
 * @param {String} storageName Name of Item in localStorage
 * @returns {CRUDResponse } Object with valuable info
 */
const readOne = (id, storageName) => {
  try {
    const myLibrary = JSON.parse(window.localStorage.getItem(storageName));
    const element = myLibrary.filter(e => e.id === id);
    if (element.size < 1) throw new Error('The Id given is not correct');
    return { success: true, msg: 'Storage retrieved!', data: element };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default readOne;