import React from 'react';
import PropTypes from 'prop-types';

const Nav = props => {
  const { name } = props;
  return (
    <div className="mb-4">
      <nav className="navbar navbar-light bg-light">
        <h2 className="navbar-brand">
          {name}
        </h2>
      </nav>
    </div>
  );
};
Nav.defaultProps = {
  name: '',
};
Nav.propTypes = {
  name: PropTypes.string,
};

export default Nav;
