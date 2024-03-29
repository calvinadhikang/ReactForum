import { useState } from "react";
import InputText from "../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            <h1 className="text-lg">Sign In</h1>
            <InputText label='Email' value={username} handleChange={onUsernameChange} />
            <InputText label='Password' type='password' value={password} handleChange={onPasswordChange} />
            <Button>Submit</Button> 
            <p className='mt-5 text-xs text-center'>Don't have an account yet? <Link to='/auth/register' className="text-blue-600 font-medium hover:underline hover:underline-offset-4">Sign Up</Link></p>
        </>
    );
}

export default LoginPage;