import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({categoryData}) => {
    // description, location,price,status, orginalPrice, yearOfUse, sellerName
const {_id,img, name, category, }=categoryData;
    return (
        <div>
            <div className="hero mb-20 justify-between  bg-base-200">
                <div className="hero-content  flex-col lg:flex-row">
                  <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-5xl font-bold">{category}</h1>
                    <p className="py-6">{name}</p>
                    <Link to={`/productdetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                  </div>
                </div>
              </div>
            
        </div>
       
    );
};

export default Category;