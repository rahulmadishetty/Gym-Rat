import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <p className='color-gray'>&copy; Gym Rat 2023 v1.0</p>
          <p className='color-gray'>
            <FontAwesomeIcon icon={faDumbbell} /> Fitness for Everyone
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
