// @ts-check

/**
 * @file Remove a element with given Id from some Item in localStorage that is Array
 * @author Israel Laguan
 * @version 1.0.0
 */

import '../Model/TypeDefs.jsdoc';

/**
 * Must change the given item from some Item on localStorage.
 *
 * Returns the new Local storage Item.
 * @param {Number} id Book to be changed
 * @param {Object} newElement object to access local storage space
 * @param {String} storageName object to access local storage space
 * @returns {CRUDResponse } Object with valuable info
 */
// const update = (id, newElement, storageName) => {
//   try {
//     const myLibrary = JSON.parse(storage.getItem('myLibrary'));
//     const newLibrary = [...myLibrary];
//     let flag = true;
//     let index = -1;
//     for (let i = 0; flag && i < myLibrary.length; i += 1) {
//       if (myLibrary[i].isbn === book.isbn) {
//         index = i; flag = false;
//       }
//     }
//     if (index > -1) {
//       newLibrary[index] = newBook;
//       storage.setItem('myLibrary', JSON.stringify(newLibrary));
//       return {
//         ok: `Book ${newBook.title} was updated in the library.`,
//         data: [newBook],
//       };
//     }
//     return {
//       error: `The book ${book.title} was not on the library. Do you want to add it?`,
//     };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };

// export default update;