import React from "react";
import cd_dm_logo from "./pics/cd_dm_logo.jpeg";
import ImgComp2 from "./ImgComp2";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div className="menu">
      <div>
        <Link
          activeClass="active"
          to="audio"
          spy={true}
          smooth={true}
          offset={-150}
          duration={170}
        >
          Audio
        </Link>
        <a> | </a>
        <Link
          activeClass="active"
          to="visual"
          spy={true}
          smooth={true}
          offset={0}
          duration={170}
        >
          Visual
        </Link>
        <a> | </a>
        <Link
          activeClass="active"
          to="discography"
          spy={true}
          smooth={true}
          offset={-150}
          duration={170}
        >
          Albums
        </Link>

        <ImgComp2 src={cd_dm_logo}></ImgComp2>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-150}
          duration={170}
        >
          About
        </Link>
        <a> | </a>
        <Link
          activeClass="active"
          to="events"
          spy={true}
          smooth={true}
          offset={-150}
          duration={170}
        >
          Events
        </Link>
        <a> | </a>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-150}
          duration={170}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Menu;
