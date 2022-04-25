import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export const Navbar = () => {
  let navbar = [
    { title: "Home", to: "/" },
    { title: "About", to: "/About" },
    { title: "Contact us", to: "/Contact" },
    { title: "User", to: "/User" },
    { title: "UsersList ", to: "userslist" },
  ];
  return (
    <div>
      {navbar.map((nav) => {
        return <Link key={nanoid(4)} to={nav.to}>{nav.title}</Link>;
      })}
    </div>
  );
};
