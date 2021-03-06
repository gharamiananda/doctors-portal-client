import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    let signInError;

    useEffect(() => {
        if (gUser || user) {
            navigate(from, { replace: true } || '/');
        }

    }, [user, gUser, from, navigate])

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }


    if (loading || gLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);

    };
    return (

        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="text-xl text-center">Login</h2>



                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">your Email</span>

                            </label>
                            <input type="email"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required!"
                                    }
                                    ,
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}



                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>

                            </label>
                            <input type="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required!"
                                    }
                                    ,
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}



                            </label>
                        </div>

                        {
                            signInError
                        }

                        <input type="submit" value="Login" className='btn w-full max-w-xs text-white' />
                    </form>
                    <p><small>New to Doctors Poral <Link to='/register' className='text-secondary'>Create New Account?</Link></small></p>

                    <div className="divider">OR</div>


                    <button className="btn btn-outline " onClick={() => signInWithGoogle()}>Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;