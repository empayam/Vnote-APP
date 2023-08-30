// pages/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux'; // Add this import
import store from '../store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfo from '../components/UserInfo';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
  // Check if the user is logged in
  const user = useSelector(state => state.user);

  return (
    <Provider store={store}>
      <div>
        <UserInfo />
        <Navigation /> {/* Add navigation */}
        {user ? <Component {...pageProps} /> : <Login />} {/* Conditional rendering */}
      </div>
    </Provider>
  );
}

export default MyApp;