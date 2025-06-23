import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>

      {isLoggedIn ? (
        <>
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
          <span className={css.user}>Welcome, {user.name}!</span>
          <button className={css.logoutBtn} onClick={handleLogout}>
            Log out
          </button>
        </>
      ) : (
        <>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={css.link}>
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
