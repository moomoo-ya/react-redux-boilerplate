import React from 'react';
import { Link } from 'react-router';

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      This app is developped by <a href="http://suzukigu.me">Game Club Suzuki</a>.
    </p>
    <p>
      <Link to="/badlink">Click this bad link</Link> to see the 404 page.
    </p>
  </div>
);

export default About;
