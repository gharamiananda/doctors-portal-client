import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useForm } from "react-hook-form";



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div>

            <div className="flex justify-center items-center h-screen">
                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <h2 class="text-xl text-center">Login</h2>



                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">your Email</span>

                                </label>
                                <input type="email"
                                    placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: 'error message' // JS only: <p>error message</p> TS only support string
                                        }
                                    })}
                                />
                                <label class="label">
                                    <span class="label-text-alt">Alt label</span>

                                </label>
                            </div>


                            <input {...register("firstName", { required: true, maxLength: 20 })}

                            />
                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                            <input type="number" {...register("age", { min: 18, max: 99 })} />
                            <input type="submit" />
                        </form>
                        <div class="divider">OR</div>


                        <button class="btn btn-outline " onClick={() => signInWithGoogle()}>Continue With Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;