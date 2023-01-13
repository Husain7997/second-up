import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.ico';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import UseToken from '../../../Components/hooks/useToken';

const Register = () => {
  const { user, createUser, googleLogin, updateUser } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState('')
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = UseToken(createdUserEmail);
  if (token) {
    navigate('/')
  }
  const handleRegister = data => {
    setRegisterError('');
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast('user create Successfully.')
        const userInfo = {
          displayName: data.name
        }

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email,data.usertype)

          })
          .catch(err => {
            console.log(err)
          });


      })
      .catch(err => {
        console.error(err);
        setRegisterError(err.message)
      })
  }
  const saveUser = (name, email, usertype) => {
    const user = { name, email, usertype };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCreatedUserEmail(email)
      });
  }

  const handleLoginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    googleLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(err => { console.error(err) })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register </h1>
          <img className="rounded mt-4 w-1/2" src={logo} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">


        <form onSubmit={handleSubmit(handleRegister)} className="text-center mb-10">
            <div className="card w-full ">
              <div className="card-body">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">name</span>
                  </label>
                  <input {...register("name", { required: "your name" })} type="text" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input {...register("email", { required: "Email Address is required",
                   pattern: {value:/([a-zA-Z0-9])/ , message: 'password must be strong'},
                   })} type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div>
                <select {...register("usertype")}>
        <option value="sellar">sellar</option>
        <option value="bayer">bayer</option>
        
      </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: 'password mustbe 6 charecter long' }
                  })} type="password" placeholder="password" className="input input-bordered" />
                 
                </div>
                <div>
                  {
                    registerError && <p className="text-red-600"> {registerError}</p>
                  }
                </div>
                <div className="form-control mt-6">
                  {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                </div>
              </div>
            </div>
            <div className="indicator">
              <button type="submit" button='submmit' className="btn btn-primary">register</button>
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

export default Register;