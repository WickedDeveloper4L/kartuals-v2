import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './signIn.scss'
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/firebase.utils';


export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    handleChange=(event)=>{
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })

    }

    handleSubmit = async event=>{
        event.preventDefault();
    }
    
  render() {
    const {email, password} = this.state
    return (
      <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>please input your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput 
            value={email}
            type='email'
            handleChange={this.handleChange}
            label='Email'
            required
            name='email'
        />
        <FormInput 
            value={password}
            type='password'
            handleChange={this.handleChange}
            label='Password'
            required
            name='password'
        />
        <div className='buttons'>
        <CustomButton type='submit'>SIGN IN</CustomButton>
        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>GOOGLE</CustomButton>
        </div>
      </form>
        <Link to='/signup' className='signup'>
            <h3>Sign Up - Create an Account here.</h3>
        </Link>
      </div>
    )
  }
}
