import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context/Context";

export const Navbar = () => {
  const { isLogged, logout } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={"src/assets/pokeapi.png"}
            alt="logo-pokeapi"
            width={100}
            height={50}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>

            {isLogged ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    `nav-item nav-link ${isActive ? "active" : ""}`
                  }
                  to="/editcreate"
                >
                  Edit/Create
                </NavLink>
                <NavLink className="nav-item nav-link" onClick={() => logout()}>
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className={({ isActive }) =>
                    `nav-item nav-link ${isActive ? "active" : ""}`
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
