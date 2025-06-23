import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";
import { logOut } from "../redux/auth/operations";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Welcome to Phonebook App 📱</h1>
      {isLoggedIn ? (
        <>
          <p>Hello, {user.name}!</p>
          <Link to="/contacts" style={buttonStyle}>
            Contacts
          </Link>
          <button onClick={handleLogout} style={buttonStyle}>
            Log out
          </button>
        </>
      ) : (
        <p>Please register or log in to access your contacts.</p>
      )}
    </div>
  );
};

const buttonStyle = {
  display: "inline-block",
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  textDecoration: "none",
  cursor: "pointer",
};

export default HomePage;
