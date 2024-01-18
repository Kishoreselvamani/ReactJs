import React from 'react'
function Login() {
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <div>
                <label>EmailAddress</label>
                <input type='email' style={{ width: '100vh' }} />
                <button type='submit' > submit</button>
            </div>
        </div>
    )
}

export default Login