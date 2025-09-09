import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPopup from '../components/Login';

const Login = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <LoginPopup isOpen={true} onClose={handleClose} />
  );
};

export default Login;
