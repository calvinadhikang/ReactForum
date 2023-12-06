const InputText = ({label, placeholder = '', value, handleChange, type = 'text'}) => {
    return(
        <div className='py-1'>
            <label className='text-sm'>{label}</label> <br />
            <input className='p-1 w-full border rounded hover:shadow-sm focus:border' type={type} value={value} onChange={handleChange} placeholder={placeholder} />
        </div>
    )
}

export default InputText;