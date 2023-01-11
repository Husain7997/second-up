import React from 'react';
// import img7 from '../../../assets/bannaer/8.jpg'
// import img6 from '../../../assets/bannaer/6.jpg'
// import img5 from '../../../assets/bannaer/5.jpg'
import img4 from '../../../assets/bannaer/4.jpg'
import img3 from '../../../assets/bannaer/3.jpg'
import img2 from '../../../assets/bannaer/2.jpg'
import img1 from '../../../assets/bannaer/1.jpg'

const Banner = () => {
    return (
        <div style={{height:'400px'}} className="carousel w-full  ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} alt='' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} alt='' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} alt='' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;