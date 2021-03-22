import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return(
    <header className="header">
      <h1 className="header__title">TODO List</h1>
      <button className="header__button">
        Don't show completed
        <FontAwesomeIcon icon={faEyeSlash} className="header__icon-button"/>
      </button>
    </header>
  );
}

export default Header;
