import { NavLink } from "react-router-dom";



export const NavBar =() => {
    return (
        
          <nav className="ml-4">
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "text-white hover:text-yellow-200"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "text-white hover:text-yellow-200"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "text-white hover:text-yellow-200"
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </nav>
    
      );
    };