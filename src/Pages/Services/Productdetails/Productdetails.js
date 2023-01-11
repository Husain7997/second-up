import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Productdetails = () => {
  const service= useLoaderData([]);
  const {user}=useContext(AuthContext)
  const {_id, name, category, img, price}=service;
    return (
        
        <div className="">
        <figure><img src={img} width="100%" alt="service pic" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 >Prize: {price} </h2>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <Link to={`/booking/:${_id}`}><button  className="btn btn-primary">BOOK NOW</button></Link>
          </div>
        </div>
     
      </div>
      
    );
};

export default Productdetails;