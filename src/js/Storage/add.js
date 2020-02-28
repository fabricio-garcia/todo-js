// @ts-check

/**
 * @file Add elements to an Storage Item that is Array
 * @author Israel Laguan
 * @version 1.0.0
 */

import '../Model/TypeDefs.jsdoc';

/**
 * Algorith to add items to some Array
 * @param {Object} item Element to be added
 * @param {Array} array Where to add element
 */
const addToArray = (item, array) => {
  try {
    const temp = [...array];
    const isItem = array.some(e => e.id === item.id);
    if (isItem) {
      return {
        success: false,
        error: `The element ${item.name} is already on Storage. Do you want to update it?`,
      };
    }
    temp.push(item);
    return {
      success: true,
      msg: 'Item added to Storage',
      data: temp,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Must add the given item to the localStorage.
 * returns the element on data
 * @param {Object} element What element to be added
 * @param {String} storageName Where to store the element
 * @returns {CRUDResponse } Object with valuable info
 */
const add = (element, storageName) => {
  try {
    const storage = JSON.parse(window.localStorage.getItem(storageName));
    const { success, error, data } = addToArray(element, storage);
    if (!success) throw new Error(error);
    window.localStorage.setItem(storageName, JSON.stringify(data));
    return { success: true, msg: `Element added to ${storageName}`, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default add;