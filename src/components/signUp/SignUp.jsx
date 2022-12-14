import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './signUp.scss'
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument} from '../firebase/firebase.utils';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Passwords must match!!');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error)
        }
    }


    handleChange = event  =>{
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    
  render() {

    const {displayName, email, password, confirmPassword} = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I dont have an Account</h2>
        <form onSubmit={this.handleSubmit}>
        <FormInput
            type='text'
            required
            name='displayName'
            value={displayName}
            label='Username'
            onChange={this.handleChange}
        />
        <FormInput
            type='email'
            required
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
        />
        <FormInput
        type='password'
        required
        name='password'
        value={password}
        label='Password'
        onChange={this.handleChange}
        />
        <FormInput
            type='password'
            required
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
        />
        <div className='button'>
            <CustomButton type='submit'>SIGN UP</CustomButton>
        </div>
        </form>
        <Link to='/userAuth' className='signin'>
            <h3>Log In here if you already have an Account.</h3>
        </Link>
      </div>
    )
  }
}
