import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useForm } from "react-hook-form";



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>

            <div className="flex justify-center items-center h-screen">
                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <h2 class="text-xl text-center">Login</h2>
                        <div class="divider">OR</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input defaultValue="test" {...register("example")} />

                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register("exampleRequired", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input {...register("firstName", { required: true, maxLength: 20 })} />
                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                            <input type="number" {...register("age", { min: 18, max: 99 })} />
                            <input type="submit" />
                        </form>

                        <button class="btn btn-outline " onClick={() => signInWithGoogle()}>Continue With Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;