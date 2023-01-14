import React from 'react';
import img1 from '../../../assets/other/1.jpg'
import img2 from '../../../assets/other/2.jpg'

const HomeComponents = () => {
  return (
    <div className=' text-center mt-10'>

      <div className=" text-center mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} alt='' className="max-w-sm h-full rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Introductory Offer:</h1>
            <p className="py-6">You will receive $40 off your qualifying first order if it is at least $250. Cannot be combined with any other discounts or financing offers. Additional exclusions apply for select manufacturers, gift cards and purchases made with a Wayfair Professional profile. Offer only applies to first Wayfair order made with your Wayfair Credit Card or Wayfair Mastercard. Offer not available for purchases at Perigold. Minimum purchase amount excludes tax, shipping and other discounts. Subject to credit approval.
         
         </p>
         </div>
        </div>
      </div>

      <div className=" text-center mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div>
            <h1 className="text-5xl font-bold"> Re-Sale Your un used product</h1>
            <p className="py-6">Whether you’re looking for a piece to complete a space or want to offload a room full of furniture before a big move, resale sites can often be your best bet for scoring something original or reaching lots of buyers with your listings. E-marketplaces can be competitive for both sellers and shoppers, but the good news is there are more resources than ever for getting into the re-commerce game, and each has its own special twist to offer users.
          </p>
          </div>
          <img src={img2} alt='' className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>


  );
};

export default HomeComponents;