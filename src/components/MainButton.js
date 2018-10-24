import React from 'react';
import { Link } from 'react-router-dom';

const MainButton = ({ dataLoaded, path, value }) => (
  <Link
    className={`button is-large is-rounded is-primary ${dataLoaded ? 'is-inverted' : 'is-loading'}`}
    to={path}
  >
    {value}
  </Link>
)

export default MainButton;