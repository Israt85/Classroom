import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {userLogin}= useContext(AuthContext)
    const nevigate= useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        
        console.log(data)
        userLogin(data.email, data.password)
            .then(result => {
                console.log(result.user)
                nevigate(location?.state ? location.state : "/");
            })
                    .catch(err => {
                        console.log(err);
                    })
    
    }
    return (
        <div className='h-screen bg-base-100'>
            <h2 className='text-center text-2xl py-6'>WelCome to Our Classroom</h2>
            
            <div className='flex my-5 justify-evenly items-center'>
                <div className='w-80 px-4 rounded-md py-5 bg-slate-100 border border-purple-900 h-full' >
                <h2 className='text-center text-xl'>Login</h2>
                  
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    
                    className=" mx-auto">
                        
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email"
                             {...register("email")} 
                             
                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" 
                            {...register("password")} 
                            
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <div>
                            <button type="submit" className="text-white w-full bg-purple-900 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                       {/* <SocialLogin></SocialLogin> */}

                        <h2 className='mt-4'>New to this website? please <Link className='text-blue-800 font-bold hover:underline' to='/signup'>Register</Link> </h2>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;