import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// import Productdetails from '../Productdetails/Productdetails';


const Service = ({service}) => {
    const {_id, name, category, img, price}=service;
    return (
        
        <div className="card card-compact w-64 bg-base-100 shadow-xl m-4">
      <PhotoProvider toolbarRender={({ onScale, scale }) => {
      <>
        <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)} />
        <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)} />
      </>;
  }}>
      <PhotoView src={img}>
      <img src={img} alt="service" />
      </PhotoView>
    </PhotoProvider>
      
        
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 >Prize: {price} </h2>
          <p>{category?.slice(0, 100)} ...</p>
          <div className="card-actions justify-end">
            <Link to={`/productdetails/${_id}`}>
              <button  className="btn btn-primary">View Details</button>
              </Link>
          </div>
        </div>
        
      </div>
    );
};

export default Service;