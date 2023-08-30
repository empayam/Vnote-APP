// pages/index.js
import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Welcome to the Administration Panel</h1>
          {user && <p>Welcome, {user.username}!</p>}
        </div>
      </div>
    </div>
  );
}

export default Home;
