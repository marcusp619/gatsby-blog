import React from 'react';
import "../css/main.css";
import Card from  '../template/Card';
import { Link } from 'gatsby';

export default () => (
  <main>
    <nav className="main--nav">
      <Link to="#">#Dev</Link>
      <Link to="#">#Rant</Link>
      <Link to="#">#tutorial</Link>
      <Link to="#">#css</Link>
      <Link to="#">#js</Link> 
    </nav>

  </main>
);