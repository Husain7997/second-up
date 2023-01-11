import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.ico';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Register = () => {
  const {user,createUser, googleLogin, updateUser } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const userInfo = {
      name: name
    };

    createUser(email, password)
      .than((result) => {
        const user = result.user;
        console.log(user);

        updateUser(userInfo)
          .then(() => {
            form.reset();
          })
          .catch(err => {
            console.log(err)
          });
      })
      .catch(error => {
        console.log(error)
      })
  }

  const googleProvider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    return googleLogin(googleProvider)
      .than((result) => {
        const user = result.user;
        console.log(user)
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
          <h1 className="text-5xl font-bold">Register </h1>
          <img className="rounded mt-4 w-1/2" src={logo} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">


          <form onSubmit={handleRegister} className="text-center mb-10" >
            <h2 className="text-2xl font-bold">Add a New Service</h2>
            <div className="card w-full ">
              <div className="card-body ">

                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                <input type="password" name='password' placeholder="password" className="input input-bordered" />

              </div>
            </div>
            <div className="indicator">

              <button button='submmit' className="btn btn-primary">Register</button>
            </div>
            <div className="">
              <button onClick={handleLoginWithGoogle} className="btn btn-primary">Login With Google</button>
            </div>
            <h6 className='text-center'> Already have an account <Link to='/login' className='text-xl font-bold text-center text-lime-600'> Login</Link></h6>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Register;