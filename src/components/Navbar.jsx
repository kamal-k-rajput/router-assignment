import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  let navbar = [
    { title: "Home", to: "/" },
    { title: "Tanner Goods", to: "/goods" },
    { title: "Mazama Wared", to: "/wares" },
    { title: "Featured", to: "/Featured" },
    { title: "Final sale ", to: "sale" },
  ];
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="links">
        {navbar.map((el, i) => (
          <Link className="link" key={i} to={el.to} style={{ margin: "5px" }}>
            {" "}
            {el.title}
          </Link>
        ))}
      </div>
      <div className="account"></div>
    </div>
  );
};
