import React from 'react';
import Login from "../components/Login/Login.jsx";
import backgroundImage from "../assests/login image.jpg"; // Import your background image here

const LoginPage = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
      <Login />
    </div>
  );
};

export default LoginPage;
