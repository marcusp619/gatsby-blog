import React from 'react';
import "../css/main.css";
import Card from  './Card';
import { Link } from 'gatsby';

export default () => (
  <main>
    <nav className="main--nav">
      <Link to="#">#Dev</a>
      <Link to="#">#Rant</a>
      <Link to="#">#tutorial</a>
      <Link to="#">#css</a>
      <Link to="#">#js</> 
    </nav>
    <Card />
    <Card />
    <Card />
  </main>
);