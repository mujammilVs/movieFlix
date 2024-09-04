// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Menu.css"; // Ensure your CSS file is imported

// const MenuItem = () => {
//   return (
//     <div className="sidebar">
//       <nav>
//         <ul>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/movies"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               Movies
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/sports"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               Sports
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/tvshows"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               TV Shows
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/live"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               Live
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/settings"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               Settings
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default MenuItem;

import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const { t } = useTranslation();
  return (
    <div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">{t("Home")}</Link>
          </li>
          <li>
            <Link to="/movies">{t("Movies")}</Link>
          </li>
          <li>
            <Link to="/tvshows">{t("TVShows")}</Link>
          </li>
          <li>
            <Link to="/sports">{t("Sports")}</Link>
          </li>
          <li>
            <Link to="/live">{t("Live")}</Link>
          </li>
          <li>
            <Link to="/settings">{t("Settings")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
