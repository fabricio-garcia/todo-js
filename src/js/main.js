const projectList = document.querySelector('[data-project-list]');
const newProjectForm = document.querySelector('[data-new-project-form');
const newProjectInput = document.querySelector('[data-new-project-input]');

const LOCAL_STORAGE_PROJECT_KEY = 'task.projects';
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

function clearProjects(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createProjectList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] }
}

function saveProjectsToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
}

function render() {
  clearProjects(projectList);
  projects.forEach(project => {
    const createProject = document.createElement('li');
    createProject.classList.add('project-name');
    createProject.dataset.projectId = project.id;
    createProject.innerText = project.name;
    projectList.appendChild(createProject);
  })
}

function saveAndRender() {
  saveProjectsToLocalStorage();
  render();
}

newProjectForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === '') return;
  const project = createProjectList(projectName);
  newProjectInput.value = null;
  projects.push(project);
  saveAndRender();
});