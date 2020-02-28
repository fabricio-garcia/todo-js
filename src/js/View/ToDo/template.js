// @ts-check
import style from './style';

const template = (css, status, priority, task, project) => {
  const template = document.createElement('template');
  template.innerHTML += `<style>${style(css && css)()}</style>`;
  template.innerHTML += `
    <div class="container">
      <div class="status">
        <div class="checkbox-container circular-container">
          <label class="checkbox-label">
            <input type="checkbox" ${status === 'true' ? 'checked' : null} id="checkbox">
            <a href="task.html?id=${project}" class="checkbox-custom circular"></a>
          </label>
          <div id="input-title"><slot>Task 1</slot></div>
        </div>
      </div>
      <a href="task.html?id=${project}" class="priority ${priority}" task="${task}" id="select">${priority.toUpperCase()}</a>
    </div>
    `;
  return template;
};

export default template;