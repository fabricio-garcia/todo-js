// @ts-check
import css from '../helpers/css';

/**
 * CSS for the template
 * @param {Object} props
 * @returns {any}
 */
const style = props => css`
  .container {
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: auto 80px;
    grid-gap: 10px;
    align-items: center;
    background-color: #b7b7b7;
    color: white;
    font-weight: bold;
    border-radius: 25px;
    ${props && props.container}
  }
  .status {
    color: white;
    ${props && props.status}
  }
  /* https://appitventures.com/blog/styling-checkbox-css-tips/ */
  .checkbox-container {
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${props && props.checkboxContainer}
  }
  .done {
    text-decoration: line-through;
    text-decoration-style: double;
    font-weight: 200;
    color: red;
    ${props && props.done}
  }
  .priority {
    color: white;
    font-weight: bold;
    border: none;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    height: 30px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    ${props && props.priority}
  }

  .priority.low {
    background-color: #478844;
    ${props && props.priorityLow}
  }

  .priority.medium {
    background-color: #3d6db4;
    ${props && props.priorityMedium}
  }

  .priority.high {
    background-color: #e30613;
    ${props && props.priorityHigh}
  }

  .checkbox-label {
    display: block;
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    height: 25px;
    width: 25px;
    clear: both;
    ${props && props.checkboxLabel}
  }

  .checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkbox-label .checkbox-custom {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 25px;
    width: 25px;
    background-color: transparent;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    border: 2px solid #525650;
  }

  .checkbox-label input:checked ~ .checkbox-custom {
    background-color: transparent;
    border-radius: 5px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity: 1;
    border: 2px solid #478844;
  }

  .checkbox-label .checkbox-custom::after {
    position: absolute;
    content: '';
    height: 0px;
    width: 0px;
    border-radius: 5px;
    border: solid #478844;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity: 1;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
  }

  .checkbox-label input:checked ~ .checkbox-custom::after {
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 8px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid #478844;
    border-width: 0 2px 2px 0;
    background-color: transparent;
    border-radius: 0;
  }

  /* For Ripple Effect */
  .checkbox-label .checkbox-custom::before {
    position: absolute;
    content: '';
    left: 10px;
    top: 10px;
    width: 0px;
    height: 0px;
    border-radius: 5px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .checkbox-label input:checked ~ .checkbox-custom::before {
    left: -3px;
    top: -3px;
    width: 24px;
    height: 24px;
    -webkit-transform: scale(3);
    -ms-transform: scale(3);
    transform: scale(3);
    opacity: 0;
    z-index: 999;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
  }

  /* Style for Circular Checkbox */
  .checkbox-label .checkbox-custom.circular {
    border-radius: 50%;
    border: 3px solid #525650;
  }

  .checkbox-label input:checked ~ .checkbox-custom.circular {
    background-color: transparent;
    border-radius: 50%;
    border: 3px solid #478844;
  }
  .checkbox-label input:checked ~ .checkbox-custom.circular::after {
    border: solid #478844;
    border-width: 0 4px 4px 0;
  }
  .checkbox-label .checkbox-custom.circular::after {
    border-radius: 50%;
  }

  .checkbox-label .checkbox-custom.circular::before {
    border-radius: 50%;
    border: 3px solid #478844;
  }

  .checkbox-label input:checked ~ .checkbox-custom.circular::before {
    border-radius: 50%;
  }
`;

export default style;
