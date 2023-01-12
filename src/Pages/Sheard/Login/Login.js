import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import logo from '../../../assets/logo.ico';
import { GoogleAuthProvider } from 'firebase/auth';
// import { Result } from 'postcss';
const Login = () => {
  
  const { googleLogin, login, user } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  if(user?.accessToken){
    
    navigate(from, { replace: true })
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .than(result => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((err) => { console.log(err) })
  }
  

  // handle Login With Google
  const googleProvider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    return googleLogin(googleProvider)
      .than((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
        
      })
      .catch((err) => { console.log(err) })
  }
  if(user?.accessToken){
    
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
          <form onSubmit={handleLogin} className="text-center mb-10" >
            <div className="card w-full ">
              <div className="card-body">
                <input type="email" name='email' placeholder="email" className="input input-bordered" />

                <input type="password" name='password' placeholder="password" className="input input-bordered" />

              </div>
            </div>
            <div className="indicator">
              <button button='submmit' className="btn btn-primary">Login</button>
            </div>
            <div className="">
              <button onClick={handleLoginWithGoogle} className="btn btn-primary">Login With Google</button>
            </div>
            <h6 className='text-center'> new this site <Link to='/register' className='text-xl font-bold text-center text-lime-600'> Register</Link></h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;