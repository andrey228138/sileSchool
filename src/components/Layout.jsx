import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css";

function getNavLinkClass({ isActive }) {
  return isActive ? "url active-link" : "url";
}

const navLinkObjects = [
  {
    to: "/",
    content: "Easy",
  },
  {
    to: "/normal", // Добавлен "/" в начало
    content: "Normal",
  },
  {
    to: "/hard", // Добавлен "/" в начало
    content: "Hard",
  },
];

export default function Layout() {
  return (
    <>
      <header>
        {navLinkObjects.map((navLinkObject, index) => (
          <NavLink
            key={index} // Добавьте уникальный ключ
            to={navLinkObject.to}
            className={getNavLinkClass}
          >
            <button className="button-url">{navLinkObject.content}</button>
          </NavLink>
        ))}
      </header>
      <Outlet />
    </>
  );
}