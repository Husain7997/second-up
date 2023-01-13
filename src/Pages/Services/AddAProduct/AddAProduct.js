import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/myProduct';
    const handleAddAProduct = (event)=>{
        event.preventDefault();
        const form= event.target;
        const title= form.title.value;
        const imgURL= form.imgURL.value;
        const email= form.email.value;
        const prize= form.prize.value;
        const rating= form.rating.value;
        const textarea= form.textarea.value;
        console.log(title, prize, rating, textarea);

        const AddAProduct={
            email:email,
            title:title,
            picture:imgURL,
            prize,
            rating:rating,
            description:textarea,
          }
          fetch(`http://localhost:5000/AddAProduct`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(AddAProduct)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if (data.acknowledged) {
              form.reset();
              alert('NEW Product Added successfully')
              navigate(from, { replace: true } || '/myProduct')
            }
          })
          .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={handleAddAProduct} className="text-center mb-10" >
            <h2 className="text-2xl font-bold">Add a New Product</h2>
            <div className="card w-full ">
                <div className="card-body grid grid-cols-1 md:grid-cols-2">
                    <input type="text" required name='title' placeholder="title" className="input input-bordered" />
                    <input type="email" required name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    <input type="text" required name='imgURL' placeholder="imgURL" className="input input-bordered" />
                    <input type="text" required name='prize' placeholder="prize" className="input input-bordered" />
                    <input type="text" required name='rating' placeholder="rating" className="input input-bordered" />
     </div>
            </div>
            <div className="indicator">
                <div className="indicator-item indicator-bottom">
                    <button button='submmit' className="btn btn-primary">Add Product</button>
                </div>
                <div className="card border">
                    <div className="card-body">
                        <textarea required name='textarea' className="textarea textarea-primary" placeholder="description"></textarea>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default AddAProduct;