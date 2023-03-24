import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';
import { useState } from 'react';
import './Header.css';

export default function Header() {

  const [theme, setTheme] = useState('dark');

  const handleIcon = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  
  return (
    <header className={`row header d-flex justify-content-center align-items-center ${theme === 'dark' ? '' : 'headerwite'}`}>
      <div className="col-6 d-flex justify-content-between">
        <h1 className="header__title">TODO</h1>
        <img onClick={handleIcon} className="icon ms-auto" src={theme === 'dark' ? sunIcon : moonIcon} alt={theme === 'dark' ? 'sun icon' : 'moon icon'} />
      </div>
    </header>
  );
}
