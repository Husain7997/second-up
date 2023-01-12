import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Booking = () => {

  const productData= useLoaderData()
  const {user}= useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleBooking = (event)=>{
    event.preventDefault();
    const form= event.target;
    const name= form.name.value;
    const imgURL= form.imgURL.value;
    const email= form.email.value || 'UnRegistered';
    const rating= form.rating.value;
    const textarea= form.textarea.value;
   
    const Product={
      id:productData._id,
      title:productData.name,
      price:productData.price,
      ctegory:productData.category,
      name,
      imgURL,
      email,
      rating,
      textarea
      
    }
    // console.log(service._id)
    fetch(`http://localhost:5000/booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Product)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.acknowledged) {
        form.reset();
        alert('Product successfully')
          navigate('/myProduct')
        
      }
    })
    .catch(err=>console.log(err))
}
  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div className="card-body">
          

            <form onSubmit={handleBooking} className="text-center mb-10" >
            
              <div className="card w-full ">
                <div className="card-body grid grid-cols-1 md:grid-cols-2">

                  <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                  <input type="text" name='imgURL' defaultValue={productData?.img} placeholder='product image URl' className="input input-bordered" />
                  <input type="text" name='email' defaultValue={user?.email} placeholder="Your email address" className="input input-bordered" />
                  <input type="text" name='email' defaultValue={productData?.name} placeholder="product name" className="input input-bordered" />
                  <input type="text" name='email' defaultValue={productData?.price} placeholder="price" className="input input-bordered" />
                  <input type="text" name='email' defaultValue={productData?.category} placeholder="category" className="input input-bordered" />
                  
                  <input type="text" name='rating' placeholder="rating" className="input input-bordered" />
                </div>
              </div>
              <div className="indicator">
                <div className="indicator-item indicator-bottom">
                  <button button='submmit' className="btn btn-primary">Add Product</button>
                </div>
                <div className="card border">
                  <div className="card-body">
                    <textarea name='textarea' required className="textarea textarea-primary" placeholder="description"></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;