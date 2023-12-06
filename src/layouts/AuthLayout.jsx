import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return(
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='p-4 rounded shadow-lg'>
                <h1 className='text-lg font-medium mb-5'>Forum App Authentication</h1>
                <Outlet/>
            </div>
        </div>
    );
}

export default AuthLayout;