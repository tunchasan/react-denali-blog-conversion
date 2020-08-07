import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div>
      <Card>
        <div className="headerContent">
          <div className="logoContainer">
            <Typography component="h1">
              <Link className="logoTitle" to="/">
                Denali
              </Link>
            </Typography>
          </div>
          <div className="menuContainer">
            <Button size="small">
              <Link className="menuItem" to="/">
                Home
              </Link>
            </Button>
            <Button size="small">
              <Link className="menuItem" to="/about">
                About
              </Link>
            </Button>
            <Button size="small">
              <Link className="menuItem" to="/contact">
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Header;
