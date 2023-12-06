const AuthLayout = ({children}) => {
    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <h1 className="text-lg">Forum App</h1>
            {children}
        </div>
    );
}

export default AuthLayout;