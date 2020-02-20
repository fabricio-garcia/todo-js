require('normalize.css/normalize.css');
require('../css/main.css');
require('./page.css');
require('../js/View/task');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-contacts');
});

document.querySelector('.edit-icon').addEventListener('click', evt => {
  document.querySelector(".edit-task").removeAttribute("hidden");
  document.querySelector(".task-description").setAttribute("hidden", true);
  console.log('soething happened!')
});
