const form = document.getElementById('edit-project-form');

form.addEventListener('submit', e => {
  try {
    e.preventDefault();
    const name = e.target['project-name'].value;
    if (!name) return Error('Please Put your name!');
    const description = e.target['project-description'].value;
    if (!description) return Error('Please Put a description for project!');
    const date = e.target['project-date'].value;
    if (!date) return Error('Please Put a due date for project!');

    // Create project Object with factory function
    // Save on local storage

    window.location = '/';
    return true;
  } catch (error) {
    return false;
  }
});