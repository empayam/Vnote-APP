// components/Navigation.js
import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Admin Panel</a>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/register">
              <a className="nav-link">Register</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link">Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
