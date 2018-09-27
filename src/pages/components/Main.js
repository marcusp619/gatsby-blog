import React from 'react';
import "../css/main.css";
import Card from  './Card';

export default () => (
  <main>
    <nav className="main--nav">
      <a href="#">#Dev</a>
      <a href="#">#Rant</a>
      <a href="#">#tutorial</a>
      <a href="#">#css</a>
      <a href="#">#js</a> 
    </nav>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </main>
);