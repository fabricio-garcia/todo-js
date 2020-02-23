// @ts-check
import style from './style';

const template = (css, status, priority) => {
  const template = document.createElement('template');
  template.innerHTML += `<style>${style(css && css)()}</style>`;
  template.innerHTML += `
    <div class="container">
      <div class="status">
        <div class="checkbox-container circular-container">
          <label class="checkbox-label">
            <input type="checkbox" ${status === 'true' ? 'checked' : null} id="checkbox">
            <span class="checkbox-custom circular"></span>
          </label>
          <div id="input-title"><slot>Task 1</slot></div>
        </div>
      </div>
      <select class="priority ${priority}" id="select">
        <option id="low" value='low' ${priority === 'low' && 'selected'}>LOW</option>
        <option id="medium" value='medium' ${priority === 'medium' && 'selected'}>MEDIUM</option>
        <option id="high" value='high' ${priority === 'high' && 'selected'}>HIGH</option>
      </select>
    </div>
    `;
  return template;
};

export default template;