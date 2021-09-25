import React from 'react'

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <>
            <div className="login-signup">
                <div className="loginContainer grid place-items-center">
                    <h1 className="text-white text-6xl pb-8">Welcome to The Night Sky</h1>

                    <div className="w-1/2 py-6 text-white">
                        {hasAccount ? (
                            <div className="text-white text-4xl grid place-items-center">Register
                            </div>
                        ) : (
                            <div className="text-white text-4xl grid place-items-center">Login
                            </div>
                        )}
                    </div>

                    <div className="w-1/2">
                        <label>Email</label>
                        <input className="text-white" type="text" placeholder="test@gmail.com" outoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className="errorMsg">{emailError}</p>
                    </div>

                    <div className="w-1/2">
                        <label>Password</label>
                        <input className="text-white" type="password" placeholder="123456" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <p className="errorMsg">{passwordError}</p>
                    </div>

                    <div className="btnContainer w-1/2 py-6 text-white">
                        {hasAccount ? (
                            <>
                                <button className="login_button" onClick={handleSignup}>Sign Up</button>
                                <p>Have an account ?{" "}
                                    <span className="text-gray-200 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                        ) : (
                            <>
                                <button className="login_button" onClick={handleLogin}>Sign In</button>
                                <p>Dont't have an account ?{" "}
                                    <span className="text-gray-200 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login
