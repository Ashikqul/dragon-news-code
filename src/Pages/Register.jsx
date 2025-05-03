import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='text-white'>
             <div className='text-black font-semibold flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-medium text-2xl text-center'> Register your account</h2>
      <div className="card-body">
      <form className="space-y-4 p-6 bg-white rounded-lg shadow-md">
  <div>
    <label className="label">
      <span className="label-text font-semibold">Your Name</span>
    </label>
    <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
  </div>

  <div>
    <label className="label">
      <span className="label-text font-semibold">Photo URL</span>
    </label>
    <input type="text" placeholder="Photo URL" className="input input-bordered w-full" />
  </div>

  <div>
    <label className="label">
      <span className="label-text font-semibold">Email</span>
    </label>
    <input type="email" placeholder="Email" className="input input-bordered w-full" />
  </div>

  <div>
    <label className="label">
      <span className="label-text font-semibold">Password</span>
    </label>
    <input type="password" placeholder="Password" className="input input-bordered w-full" />
  </div>

  <button type="submit" className="btn btn-primary w-full mt-4">Register</button>

  <p className='font-medium text-1xl text-center pt-5' > Already have an account? <Link className='text-secondary' to="/auth/login">Login</Link></p> 
</form>

      </div>
    </div>
        </div>
        </div>
    );
};

export default Register;