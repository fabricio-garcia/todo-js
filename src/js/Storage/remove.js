// @ts-check

/**
 * @file Remove an element with given Id from some Item in localStorage that is Array
 * @author Israel Laguan
 * @version 1.0.0
 */

import '../Model/TypeDefs.jsdoc';

const removeFromArray = (id, array) => {
  try {
    const temp = [...array];
    let index = -1;
    temp.forEach((b, i) => {
      if (b.id === id) index = i;
    });
    if (index > -1) {
      temp.splice(index, 1);
    } else {
      throw new Error('The element with the given id is not in the Storage. Do you want to add it?');
    }
    return { success: true, msg: 'Element removed from Storage', data: temp };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Must remove the given item from the Array item in localStorage.
 * returns the updated Item from localStorage on data
 * @param {Number} id Identifier of Object inside Storage Item Array
 * @param {String} storageName object to access local storage space
 * @returns {CRUDResponse } Object with valuable info
 */
const remove = (id, storageName) => {
  try {
    const temp = JSON.parse(window.localStorage.getItem(storageName));
    const {
      success, error, msg, data,
    } = removeFromArray(id, temp);
    if (!success) throw new Error(error);
    window.localStorage.setItem(storageName, JSON.stringify(data));
    return { success: true, msg, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default remove;