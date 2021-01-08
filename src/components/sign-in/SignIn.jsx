import React, { Component } from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { CustomButton } from '../button/CustomButton';
import { FormInput } from '../form-input/FormInput';


import './SignIn.scss'

export default class SignIn extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }


  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign__in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>  

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            label="Email" 
            required
          />

          <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="Submit" >Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>

        </form>

      </div>
    )
  }
}
