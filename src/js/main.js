const projectList = document.querySelector('[data-project-list]');
const newProjectForm = document.querySelector('[data-new-project-form');
const newProjectInput = document.querySelector('[data-new-project-input]');

let projects = [
  {
    id: 1,
    name: 'Milos'
  },
  {
    id: 2,
    name: 'Rocky'
  },
  {
    id: 3,
    name: 'Negrito'
  }
];

function createProjectList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: []
  };
}

newProjectForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === '') return;
  const project = createProjectList(projectName);
  newProjectInput.value = null;
  projects.push(project);
  render();
});

function clearProjects(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
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

render();