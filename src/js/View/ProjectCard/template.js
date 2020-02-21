const projectCardT = (project) => `
  <div class="project">
    <div class="card">
        <div class="card-header">
            <a href="project.html?id=${project.id}">
                <div class="project-title">${project.name}</div>
            </a>
            <div class="card-menu">
                <div class="dropdown">
                    <button class="dropbtn">☰</button>
                    <div class="dropdown-content">
                        <a href="editProject.html?id=${project.id}" class="menu-edit">
                            <i class="fas fa-pen edit"></i>
                            <span>Edit</span>
                        </a>
                        <a class="menu-delete" project="${project.id}" role="menu-delete">
                          <i class="fas fa-trash-alt remove" role="menu-delete" project="${project.id}"></i>
                          <span role="menu-delete" project="${project.id}">Delete</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="description">
                <p>
                ${project.description}
                </p>
            </div>
        </div>
    </div>
  </div>
`;

export default projectCardT;