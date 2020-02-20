// @ts-check

/**
 * @file Remove a element with given Id from some Item in localStorage that is Array
 * @author Israel Laguan
 * @version 1.0.0
 */

import '../Model/TypeDefs.jsdoc';

const updateItemInArray = (id, item, array) => {
  try {
    const temp = [...array];
    let flag = true;
    let index = -1;
    for (let i = 0; flag && i < temp.length; i += 1) {
      if (temp[i].id === id) {
        index = i; flag = false;
      }
    }
    if (index > -1) {
      temp[index] = item;
    } else {
      throw new Error('The id provided was incorrect! Do you want to add it?');
    }
    return { success: true, msg: 'Element updated in Storage', data: temp };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Must change the given item from some Item on localStorage.
 *
 * Returns the new Local storage Item.
 * @param {Number} id Element inside of Item to be changed
 * @param {Object} newElement object to be updated on local storage Item
 * @param {String} storageName Name of Item on Storage to be updated
 * @returns {CRUDResponse } Object with valuable info
 */
const update = (id, newElement, storageName) => {
  try {
    const myLibrary = JSON.parse(window.localStorage.getItem(storageName));
    const {
      success, error, msg, data,
    } = updateItemInArray(id, newElement, myLibrary);
    if (!success) throw new Error(error);
    window.localStorage.setItem(storageName, JSON.stringify(data));
    return { success: true, msg, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default update;