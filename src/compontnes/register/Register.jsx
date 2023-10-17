import React, { useState } from 'react'
import "./style/Register.css"
import Buttons from '../UI/buttons/Buttons';
import { useNavigate } from 'react-router-dom';


const Register = () => {

	const [login, thisLogin] = useState('');
	const [password, thisPassword] = useState('');

	const navigate = useNavigate();



	const signUp = async () => {
		console.log(login);
		console.log(password);
		try {
			const response = await fetch('http://localhost:5000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				login: login,
				password: password,
			}),
			});
	
			if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
			}
	
		
			const result = await response.json();
			console.log(result);
			navigate("/home");
		} catch (error) {
			console.error("Error:", error);
		}
	}


  return (
	<div className="register">
		<div className="register__form">
			<h1 className='register__form-title'>Welcome to Fode resturant!</h1>

			<div className="register__form-box">
				<p className='register__input-title'>Come up with your own unique name</p>
				<input 
					 onChange={(e) => {
						thisLogin(e.target.value);
					  }}   
					value={login}
					className="register__input" 
				/>
			</div>

			<div className="register__form-box">
				<p className='register__input-title'>Come up with your own unique name</p>
				<input 
					 onChange={(e) => {
						thisPassword(e.target.value);
					  }}   
					value={password}
					className="register__input" />
			</div>

			<div className="register__form-signUp">
				<p className='register__signUp'>Do you already have an existing account? <span>Sign in</span></p>
			</div>
			
			<div className="register__form-button" onClick={signUp}>
				<Buttons text="Sign up" width={450} height={80} size={24}/>
			</div>
		</div>
	</div>
  )
}

export default Register;
