import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import logo from '../../../assets/logo.ico';
import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import useToken from '../../../Components/hooks/useToken'
// import { Result } from 'postcss';
const Login = () => {

  const { googleLogin, login, user } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  if (token) {
    navigate(from, { replace: true })
  }

  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleLogin = data => {
    setLoginError('');
    console.log(data);
    login(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setLoginUserEmail(user.email)

      })
      .catch(err => {
        console.log(err)
        setLoginError(err.message)
      })
  }

  // handle Login With Google
  const googleProvider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    return googleLogin(googleProvider)
      .than((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });

      })
      .catch((err) => { console.log(err) })
  }
  if (user?.accessToken) {

    navigate(from, { replace: true })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login </h1>
          <img alt='' className="rounded mt-4 w-1/2" src={logo} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">

          {/* login from */}

          <form onSubmit={handleSubmit(handleLogin)} className="text-center mb-10">
            <div className="card w-full ">
              <div className="card-body">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input {...register("email", { required: "Email Address is required" })} type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: 'password mustbe 6 charecter long' }
                  })} type="password" placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover" >Forgot password?</Link>
                  </label>
                </div>
                <div>
                  {
                    loginError && <p className="text-red-600"> {loginError}</p>
                  }
                </div>
                <div className="form-control mt-6">
                  {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                </div>
              </div>
            </div>
            <div className="indicator">
              <button type="submit" button='submmit' className="btn btn-primary">Login</button>
            </div>
            <div className="">
              <button onClick={handleLoginWithGoogle} className="btn btn-primary mt-3">Login With Google</button>
            </div>
            <h6 className='text-center'> new this site <Link to='/register' className='text-xl font-bold text-center text-lime-600'> Register</Link></h6>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;