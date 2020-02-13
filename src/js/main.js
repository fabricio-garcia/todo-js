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

function task ( name) {
  this.id = Date.now().toString()
  this.state = false;
  return {id, name, state}
}

function createProjectList(id, name, tasks) {
  this.id = id
  this.name = name;
  this.tasks = tasks || [];
  const get = (id) => this.tasks.filter(task=>task.id===id)[0]
  const getAll = () => this.tasks
  const add = (task) => {
    this.tasks.push(task)
    return this.tasks
  }
  const update = (id, state) => {
    const newTasks = this.tasks.map(value=>{
      if (value.id === id){
        return {id: value.id, name: value.name, state}
      }
      return value
    })
    this.tasks = newTasks;
    return this.tasks
  }
  const remove = (id) => {
    const newTasks = this.tasks.filter(task=>task.id!==id);
    this.tasks = newTasks;
    return this.tasks
  }
  return { id, name, tasks: this.tasks, get, getAll, add, update, remove }
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
  const id = (Date.now()*Math.random()).toString();
  const project = createProjectList(id, projectName);
  newProjectInput.value = null;
  projects.push(project);
  saveAndRender();
});

const addTask = (projectId, taskName) => {
  const newProjects = projects.map(project=>{
    if (project.id === projectId) {
      project.add(task(taskName))
      return project
    }
    return project
  })
  projects = newProjects
  saveAndRender()
}

const changeTaskState = (projectId, taskId, newState) => {
  const newProjects = projects.map(project=>{
    if (project.id === projectId) {
      const updatedTasks = project.update(taskId, newState)
      const {id, name } = project
      let newProject = createProjectList(id, name, updatedTasks)
      return newProject
    }
    return project
  })
  projects = newProjects
  saveAndRender()
}

window.addEventListener('load', () => {
  render()
  // already implemented
  // create new Project
  const myProjectId = (Date.now()*Math.random()).toString();
  const myProject = createProjectList(myProjectId,'Moncho');
  projects.push(myProject)
  saveAndRender()
  // end of create new project

  // add eventListener to each project's name, in the event we render tasks
  // Render tasks

  // Add eventListener to + button on Tasks
  // create new task
  addTask(myProjectId, 'Task1')
  // end of create new task


  // Add eventListener to checkbox on Tasks
  // change state of task
  const moncho = projects.filter(project=>project.id===myProjectId)[0]
  const secondTaskId = moncho.getAll()[0].id
  changeTaskState(myProjectId, secondTaskId, true)
  //end of change state of task
  console.log(projects)
});
