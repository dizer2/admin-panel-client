import React from 'react'
import "./style/Register.css"
import Buttons from '../UI/buttons/Buttons';


const Register = () => {
  return (
	<div className="register">
		<div className="register__form">
			<h1 className='register__form-title'>Welcome to Fode resturant!</h1>

			<div className="register__form-box">
				<p className='register__input-title'>Come up with your own unique name</p>
				<input className="register__input" />
			</div>

			<div className="register__form-box">
				<p className='register__input-title'>Come up with your own unique name</p>
				<input className="register__input" />
			</div>

			<div className="register__form-signUp">
				<p className='register__signUp'>Do you already have an existing account? <span>Sign in</span></p>
			</div>
			
			<div className="register__form-button">
				<Buttons text="Sign up" width={450} height={80} size={24}/>
			</div>
		</div>
	</div>
  )
}

export default Register;
