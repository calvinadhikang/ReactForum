const Button = ({children, handleClick}) => {
    return(
        <button className='px-3 py-2 my-2 bg-black hover:bg-slate-950 text-white rounded text-sm' onClick={handleClick}>{children}</button>
    )
}

export default Button;