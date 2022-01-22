import React from 'react'

const ErrorMessage = ({children}) => {
    return (
        <div className='text-red-600 '>
            <p>{children}</p>
        </div>
    )
};
export default ErrorMessage
