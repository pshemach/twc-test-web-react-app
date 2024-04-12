import React, { useState } from 'react'
import Button from './Button';
import Input from './Input';
import Title from './Title';
import SubTitle from './SubTitle';

export default function LoginForm() {
    const [values,setValues] = useState({email:"",password:""});
    const [error, setError] = useState("");

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
          }));
          setError("");   
    }

    const handleSubmit = async (e) =>{

    }
  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:"#083F46"}}>
        <div>
        <Title>Hi there,</Title>
        <br></br>
        <SubTitle>Welcome to our </SubTitle>
        <br/> 
        <SubTitle>contacts portal</SubTitle>
        </div>
        <div>
            <Input
            type='email'
            name='email'
            placeholder='e-mail'
            value={values.email}
            onChange={handleChange}
            />
            <Input
          type="password"
          name="password"
          value={values.password}
          placeholder="password"
          onChange={handleChange}
        />            
        </div>
        <Button type="submit">login</Button>
    </form>
  )
}
