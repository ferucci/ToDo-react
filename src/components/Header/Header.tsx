import './Header.scss';
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link
  }

  return (
    <header className={classes.index}>
      <div className={classes.container}>
        <NavLink className={getActiveClass} to="/"
        >Main Page</NavLink>
        <NavLink className={getActiveClass} to="/list"
        >ToDo Page</NavLink>
      </div>
    </header>
  );
}