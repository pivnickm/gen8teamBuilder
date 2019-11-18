import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./_index.scss";

const Header = ({ siteTitle }) => (
  <header className="header">
    <h3 className="header_text">
      <Link className="header_link" to="/">
        {siteTitle}
      </Link>
    </h3>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
