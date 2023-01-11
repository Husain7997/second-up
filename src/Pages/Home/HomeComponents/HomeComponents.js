import React from 'react';
import img1 from '../../../assets/other/1.jpg'
import img2 from '../../../assets/other/2.jpg'

const HomeComponents = () => {
  return (
    <div className=' text-center mt-10'>

      <div className="hero  bg-base-200 mb-32">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Cook at Home</h1>
            <p className="py-6">Do you cook at home more often now? Make sure you have all of the tools and accessories need to prepare, cook and store your favorite dishes.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200 mb-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} alt='' className="max-w-sm h-full rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">What Is A Cloud Kitchen?</h1>
            <p className="py-6">A cloud kitchen—also referred to as a “ghost kitchen” or “virtual kitchen”—is a commercial kitchen space that provides food businesses the facilities and Products needed to prepare menu items for delivery and takeout. Unlike traditional brick-and-mortar locations, cloud kitchens allow food businesses to create and deliver food products with minimal overhead.

              Recent data indicates that meal delivery orders increased by more than 150% from 2019 to 2020—and UBS anticipates the food delivery market to increase more than 10x over a ten-year period from $35 billion per year to $365 billion. More and more restaurant owners and food entrepreneurs are turning to cloud kitchens as an ideal business solution to capture this increase in food delivery demand.

              Curious about cloud kitchens and want to find out more? The below guide provides an overview of cloud kitchens and the growing list of reasons to make cloud kitchens a part of your business’s growth strategy.</p>

          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200 mb-32">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div>
            <h1 className="text-5xl font-bold"> Cloud Kitchens Have Higher Profit Margins</h1>
            <p className="py-6">Profit margin is the amount a company earns once accounting for expenses like rent, staff wages, monthly utilities and general maintenance. Traditional restaurants typically suffer smaller profit margins than restaurants based in cloud kitchens since traditional restaurants have so many additional overhead costs and startup expenses.</p>

          </div>
          <img src={img2} alt='' className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>


  );
};

export default HomeComponents;