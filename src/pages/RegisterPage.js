import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Helmet } from 'react-helmet';


const RegisterPage = () => {
  return (
    <div className="container mx-auto mt-8 flex-1 flex justify-center items-center">
        <Helmet>
            <title>AirsoftMunteanu | Register</title>
        </Helmet>
        <RegisterForm />
    </div>
  );
};

export default RegisterPage;
