// @ts-check
import css from '../helpers/css';

/**
 * CSS for the template
 * @param {Object} props
 * @returns {any}
 */
const style = props => css`
  .card {
    background-color: white;
    border-radius: 20px;
    padding: 2em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${props && props.card}
  }

  .card-header {
    display: flex;
    justify-content: flex-start;
    ${props && props.cardHeader}
  }

  .card-header .title {
    color: #305287;
    font-size: 1.5rem;
    font-weight: 900;
  }
`;

export default style;