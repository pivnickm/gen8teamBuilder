import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./_index.scss";

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="header_text">
      <Link className="header_link" to="/">
        {siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
