import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
// import { Button, Menu, MenuItem } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/MenuRounded";

import "./Header.scss";
import logo from "../../../assets/logos/logo-mossaico-grey.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Headroom disableInlineStyles>
      <h1>
        <Link to="/">
          <img
            src={logo}
            alt="Mossaico · Arquitectura y Diseño para todos"
            className="headroom__logo"
            title="Ir a inicio"
            aria-label="Logotipo de Mossaico"
          />
        </Link>
      </h1>
      <nav className="headroom__nav">
        <ul className="headroom__nav--basic">
          <li className="headroom__nav--item">
            <Link
              to="/about"
              name="link-about"
              title="Ir a Nosotros"
              className="headroom__nav--button"
            >
              Nosotros
            </Link>
          </li>
          <li className="headroom__nav--item">
            <Link
              to="/servicios"
              name="link-service"
              title="Ir a servicios"
              className="headroom__nav--button"
            >
              Servicios
            </Link>
          </li>
          <li className="headroom__nav--item">
            <Link
              to="/portfolio"
              name="link-portfolio"
              title="Ir a portfolio"
              className="headroom__nav--button"
            >
              Portfolio
            </Link>
          </li>

          <li className="headroom__nav--item">
            <Link
              to="/contacto"
              name="link-contact"
              title="Ir a contacto"
              className="headroom__nav--button"
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div className="headroom__nav--burger">
          {/* <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon htmlColor="#D27919" />
          </Button> */}
          {/* <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/about"
                name="link-about"
                title="Ir a Nosotros"
                className="headroom__nav--button"
              >
                Nosotros
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/servicios"
                name="link-service"
                title="Ir a servicios"
                className="headroom__nav--button"
              >
                Servicios
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link
                to="/portfolio"
                name="link-portfolio"
                title="Ir a portfolio"
                className="headroom__nav--button"
              >
                Portfolio
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link
                to="/contacto"
                name="link-contact"
                title="Ir a contacto"
                className="headroom__nav--button"
              >
                Contacto
              </Link>
            </MenuItem>
          </Menu> */}
        </div>
      </nav>
    </Headroom>
  );
};

export default Header;
