require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-contacts')
})

const form = document.getElementById("edit-task-form");

form.addEventListener('submit', e=>{
    try {
        e.preventDefault();
        const name = e.target['task-name'].value;
        if (!name) return Error('Please Put your name!');        
        const description = e.target['task-description'].value;             
        // Create project Object with factory function
        // Save on local storage

        alert('Success!');
        window.location = '/';
        return true
    } catch (error) {
        console.error(error)
        alert(`Something went wrong: ${error.message}`);
        return false
    }    
})