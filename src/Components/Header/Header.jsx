import sunIcon from '../../images/icon-sun.svg';
import './Header.css';

export default function Header() {
    return (
        <header className="row header d-flex justify-content-center align-items-center">
        <div className="col-6 d-flex justify-content-between">
          <h1 className="header__title">TODO</h1>
          <img className="icon ms-auto" src={sunIcon} alt="moon icon"/>
        </div>
        </header>
    );
  } 