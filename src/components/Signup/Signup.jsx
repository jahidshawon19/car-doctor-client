import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { authContext } from '../../context/AuthContext';

const Signup = () => {
    const {userRegister} = useContext(authContext)
    const handleSignUp = (e)=>{
        e.preventDefault()

   
        const email = e.target.email.value 
        const password = e.target.password.value 

        userRegister(email, password)
        .then(result=>{
            const user = result.user 
            console.log(user)
        })

        .catch(err=>{

            console.log(err);
        })
    }
    return (
        <>
                        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create Your Account now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleSignUp}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary" type='submit'>Sign UP</button>

                        <p>already acount <Link to="/login">login</Link></p>
        
                        </div>
                        </form>

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;