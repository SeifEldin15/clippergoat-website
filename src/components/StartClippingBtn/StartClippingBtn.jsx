import React from 'react';
import { Link } from 'react-router-dom';
import './StartClipping.css';

const StartClippingBtn = ({ text, to }) => {
  return (
    <Link to={to} className="StartClipping">
      {text} <i className="fa-regular fa-arrow-right"></i>
    </Link>
  );
}

export default StartClippingBtn;
