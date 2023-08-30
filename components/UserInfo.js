// components/UserInfo.js
import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions'; // Import logoutUser action

function UserInfo({ user, logoutUser }) {
  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          {user ? (
            <div>
              <p>Welcome, {user.username}!</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <p>Not logged in.</p>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(UserInfo);