// @ts-check
import style from './style';

const template = (css) => {
  const template = document.createElement('template');
  template.innerHTML += `<style>${style(css && css)()}</style>`;
  template.innerHTML += `
        <div class="card">
            <div class="card-header">
                <slot name="card-title"></slot>
                <slot name="card-menu"></slot>
            </div>
            <div class="card-body">
                <slot>CARD BODY HERE</slot>
            </div>
            <div class="card-Footer">
                <slot name="card-footer"></slot>
            </div>
        </div>
    `;
  return template;
};

export default template;