import React from 'react';
import { Link } from 'gatsby';
import '../css/header.css';

export default ({ children }) => (
  <div className="header-wrapper">
    <header>
      <Link to="/" className="header--logo" href="#">MP</Link>
      <nav className="header--nav">
        <Link to="/">Home</Link>
        <Link to="">Blog</Link>
        <Link to="">Work</Link>
        <Link to="/About/">About Me</Link>
      </nav>
    </header>
    <section className="header--hero">
      <h1>Mark's</h1>
      <h1>Dev Blog</h1>
    </section>
    {children}
  </div>
)