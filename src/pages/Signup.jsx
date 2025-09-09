import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupPopup from '../components/Signup';

const Signup = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <SignupPopup isOpen={true} onClose={handleClose} />
  );
};

export default Signup;


