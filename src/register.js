import React from 'react'
import './App.css';
import { useState } from 'react';
import './register.css'

function Register() {

    const [values, setValues] = useState({
        username: "",
        email: "",
    });
    const [submitted,setsubmitted]= useState(false);
    const [valid , setvalid]=useState(false);

    const handleUsername = (event) => {
        setValues({ ...values, username: event.target.value })
    }
    const handleEmail = (event) => {
        setValues({ ...values, email: event.target.value })
    }
    
    const handlesubmit = (event) => {
       event.preventdefault();
       if (values.username && values.email){
           setvalid(true);
       }
       setsubmitted(true)
    } 
    return (
        <div >
            <h1>Register Form</h1>
            <div className="form-container">
                
                <form className="register-form">
                    {submitted ? <div class="success-message">success,thanks</div> :null }
                    <input className="form-field" value={values.username} onChange="{handleUsername}" placeholder="Username" name="Username" />
                    {submitted && !values.username ?   <span>Please fill input</span>: null }
                    <br/>
                    <input className="form-field" value={values.email} onChange="{handleEmail}" placeholder="Email" name="Email" />
                    {submitted && !values.email ?   <span>Please fill input</span>: null }
                    <br/>
                    <button className="" type="submit" >Register</button>

                </form>
            </div>
        </div>
    );
}

export default Register;