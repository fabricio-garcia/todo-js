
const projectHeader = (id, name) => `
  <a href="project.html?id=${id}" slot="card-title">
    <div class="project-title">${name}</div>
  </a>
  <div class="card-menu" slot="card-menu">
    <div class="dropdown">
      <button class="dropbtn">☰</button>
      <div class="dropdown-content">
        <a href="editProject.html?id=${id}" class="menu-edit">
          <i class="fas fa-pen edit"></i>
          <span>Edit</span>
        </a>
        <a class="menu-delete" project="${id}" role="menu-delete">
        <i class="fas fa-trash-alt remove" role="menu-delete" project="${id}"></i>
        <span role="menu-delete" project="${id}">Delete</span>
        </a>
      </div>
    </div>
  </div>
`;

const projectCardT = (project) => `
<div class="project" key="${project.id}">
  <my-card>
    ${projectHeader(project.id, project.name)}
    <div >
        <div class="description">
            <p>
            ${project.description}
            </p>
        </div>
    </div>
  </my-card>
</div>
`;

export default projectCardT;