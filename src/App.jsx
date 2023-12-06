import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='bg-gray-500 w-screen h-screen flex items-center justify-center'>
            <h1 className='text-grey-800'>Hello World</h1>
        </div>
    )
}

export default App
