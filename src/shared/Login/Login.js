import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
const Login = () => {
    const [loginError, setLoginError] = useState('');
    const {signInUsingGoogle, setIsloading} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const location = useLocation();   
    const redirect_uri = location.state?.from || '/home';

    console.log(redirect_uri);
    

    const signIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        }).catch(error=>{

        }).finally(() => setIsloading(false))
    }

    
    const onSubmit = data => {
        const {email, password} = data;
        console.log(data);
        
    };
    return (
        <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto my-20">
            <div className="w-3/5 hidden md:block">
                <div className="w-3/5 mx-auto">
                    <img src="https://i.ibb.co/jfJbpz5/signin.png" alt="" />
                </div>
            </div>
            <div className="md:w-2/5 w-11/12 form-design text-left block">
                <div className="md:w-3/5 w-full mx-auto">
                    <h2 className="text-3xl font-medium login-header">Login</h2>
                    <p>Doesn't have an account? <NavLink className="text-blue-900 mb-4" to="/register">Sign Up</NavLink></p>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            {/* <label htmlFor="email">Email</label> */}
                            <div className="border border-1-blue p-1">
                                <i className="fas fa-envelope-open mr-5 ml-2 text-blue-900"></i>
                                <input id="email" className="outline-none" placeholder="Enter email" type="email" {...register("email" )} required />
                                
                                
                            </div>
                        </div>
                        <div>
                            <div className="border border-1-blue p-1">
                                <i className="fas fa-lock mr-5 ml-2 p-1 text-blue-900"></i>
                                <input className="outline-none" placeholder="Enter password" type="password" {...register("password")} required/>
                            </div>
                        </div>
                        
                        <input type="submit" value="Sign In" className="block w-full font-medium py-1 my-2 px-12 bg-blue-900 text-white btn-hover"/>
                    </form>
                    <p className="text-red-500 font-medium"></p>
                    <p className="text-center">--------- or ---------</p>
                    <div>
                        <div className="flex items-center justify-center border border-1-blue p-1 text-center cursor-pointer" >
                            <img className="w-5 h-5 text-right" src="https://i.ibb.co/KwpqHF4/google-icon.png" alt="" /> 
                            <button onClick={signIn} className=" text-left text-lg font-base ml-1.5">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;