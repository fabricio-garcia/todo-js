require('normalize.css/normalize.css');
require('../css/main.css');
require('./page.css');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-contacts');
  // TODO: Check if currentProject is set
  // If not redirect to '/'
});

document
  .getElementById('project-date')
  .setAttribute('min', new Date().toISOString().split('T')[0]);

const form = document.getElementById('edit-project-form');

form.addEventListener('submit', e => {
  try {
    e.preventDefault();
    const name = e.target['project-name'].value;
    if (!name) return Error('Please Put your name!');
    const date = e.target['project-date'].value;
    if (!date) return Error('Please Put a due date for project!');
    // const description = e.target['project-description'].value;
    // Create project Object with factory function
    // Save on local storage

    alert('Success!');
    window.location = '/';
    return true;
  } catch (error) {
    console.error(error);
    alert(`Something went wrong: ${error.message}`);
    return false;
  }
});