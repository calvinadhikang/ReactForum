import { useState } from "react";
import InputText from "../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onNameChange = (e) => {
        const value = e.target.value;
        setName(value);
    }

    const onUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
    }
    
    const onPasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    return(
        <>
            <h1 className="text-lg">Sign Up</h1>
            <InputText label='Name' value={name} handleChange={onNameChange} />
            <InputText label='Email' value={username} handleChange={onUsernameChange} />
            <InputText label='Password' type='password' value={password} handleChange={onPasswordChange} />
            <Button>Submit</Button>
            <p className='mt-5 text-xs text-center'>Already have an account? <Link to='/auth/login' className="text-blue-600 font-medium hover:underline hover:underline-offset-4">Sign In</Link></p>
        </>
    );
}

export default RegisterPage;