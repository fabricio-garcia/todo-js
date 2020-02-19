require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')
require('../js/View/newProject');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-contacts');

});

const dialog = document.getElementById('dialogCont');  

document.getElementById('dialog-box').addEventListener('click', evt => {        
  dialog.style.top = '30%';
  dialog.style.opacity = 1;     
  document.getElementById('freezed-layer').style.display = '';
});

document.getElementById('cancel').addEventListener('click', evt => {
  dialog.style.top = '-30%';
  dialog.style.opacity = 0;     
  document.getElementById('freezed-layer').style.display = 'none';
});

document.getElementById('confirm').addEventListener('click', evt => {
  dialog.style.top = '-30%';
  dialog.style.opacity = 0;     
  document.getElementById('freezed-layer').style.display = 'none';
  console.log("Project Erased!")
});
