import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div>
    <h2>404 Not Found</h2>
    <Link to="/">Go back to homepage</Link>
  </div>
);

export default NotFound;
