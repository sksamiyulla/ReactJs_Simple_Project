import React from 'react';
import Menu from './Menu';
import './Header.css';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <div>
      <h1 className="s2">{props.name}, {props.branch}</h1>
      <p>{props.a}</p> {/* Assuming 'a' is a prop */}
      <Menu />
      <hr />
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string,
  branch: PropTypes.number.isRequired,
  a: PropTypes.any, // Define the PropTypes for 'a' based on its actual type
};