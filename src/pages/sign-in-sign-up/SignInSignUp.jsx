import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './SignInSignUp.scss';

export const SignInSignUp = () => {
  return (
    <div className="signIn__and__signUP">
      <SignIn />
      <SignUp />
    </div>
  )
}
