import React from 'react';
import '../css/header.css';

export default () => (
  <div className="header-wrapper">
    <header>
      <a className="header--logo" href="#">MP</a>
      <nav>
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Work</a>
        <a href="#">About me</a>
      </nav>
    </header>
    <section className="header--hero">
      <h1>Mark's</h1>
      <h1>Dev Blog</h1>
    </section>
  </div>
)