import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || 'dashboard/myProduct';
    // const handleAddAProduct = (event)=>{
    // event.preventDefault();
    // const form= event.target;
    // const title= form.title.value;
    // const img= form.img.value;
    // const email= form.email.value;
    // const prize= form.prize.value;
    // const rating= form.rating.value;
    // const textarea= form.textarea.value;
    // console.log(img);


    // }
    // const [imgData, setImgData] = useState('');
    const { register, handleSubmit } = useForm();
    const handleAddAProduct = data => {
        console.log(data)
        // const picture = data.img[0];
        // //    console.log(picture)
        // const formData = new FormData();
        // formData.append('image', picture);
        // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`

        // fetch(url, {
        //     method: "POST",
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(imgData => setImgData(imgData))

        const AddAProduct = {
            email: user.email,
            title: data.title,
            // img: imgData.data.url,
            price: data.price,
            mobile: data.mobile,
            description: data.description,
            category: data.category,
            status: data.status,
            condition: data.condition,
            location: data.location
        }

        fetch(`http://localhost:5000/AddAProduct`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(AddAProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    //   form.reset();
                    alert('NEW Product Added successfully')
                    navigate(from, { replace: true } || '/')
                }
            })
            .catch(err => console.log(err))
    };



    return (

        <form onSubmit={handleSubmit(handleAddAProduct)}>
            <label className="label">
                <span className="label-text">title</span>
            </label>
            <input {...register("title", { required: true })} className="input input-bordered w-full" />

            <label className="label">
                <span className="label-text">price</span>
            </label>
            <input {...register("price", { required: true })} className="input input-bordered w-full" />

            <label className="label">
                <span className="label-text">image</span>
            </label>
            <input type="file"  {...register("img")} className="input input-bordered w-full" />
            <label className="label">
                <span className="label-text">image URL</span>
            </label>
            <input {...register("imgURL")} className="input input-bordered w-full" />


            <label className="label">
                <span className="label-text">mobile number</span>
            </label>
            <input {...register("mobile", { required: true })} className="input input-bordered w-full" />

            <label className="label">
                <span className="label-text">category</span>
            </label>
            <select {...register("category", { required: true })} className="input input-bordered w-full">
                <option value="BEDROOM">BEDROOM</option>
                <option value="LIVING">LIVING ROOM</option>
                <option value="DINING">DINING ROOM</option>
            </select>

            <label className="label">
                <span className="label-text">status</span>
            </label>
            <select {...register("status", { required: true })} className="input input-bordered w-full">
                <option value="booked">booked</option>
                <option value="available">available</option>
            </select>

            <label className="label">
                <span className="label-text">condition</span>
            </label>

            <select {...register("condition", { required: true })} className="input input-bordered w-full">
                <option value="excellent">excellent</option>
                <option value="good">good</option>
                <option value="fair">fair</option>
            </select>


            <label className="label">
                <span className="label-text">Location</span>
            </label>
            <input {...register("location", { required: true })} className="input input-bordered w-full" />


            <label className="label">
                <span className="label-text">description</span>
            </label>
            <input {...register("description", { required: true })} className=" input input-bordered textarea  w-full" />

            <br />
            <br />
            <button type="submit" className="btn btn-primary">ADD PRODUCT</button>

        </form>




        //     <form onSubmit={handleAddAProduct} className="text-center mb-10" >
        //         <h2 className="text-2xl font-bold">Add a New Product</h2>
        //         <div className="card w-full ">
        //             <div className="card-body grid grid-cols-1 md:grid-cols-2">
        //                 <input type="text" required name='title' placeholder="title" className="input input-bordered" />
        //                 <input type="email" required name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        //                 <input type="file" required name='img' placeholder="img" className="input input-bordered" />
        //                 <input type="text" required name='prize' placeholder="prize" className="input input-bordered" />
        //                 <input type="text" required name='rating' placeholder="rating" className="input input-bordered" />
        //  </div>
        //         </div>
        //         <div className="indicator">
        //             <div className="indicator-item indicator-bottom">
        //                 <button button='submmit' className="btn btn-primary">Add Product</button>
        //             </div>
        //             <div className="card border">
        //                 <div className="card-body">
        //                     <textarea required name='textarea' className="textarea textarea-primary" placeholder="description"></textarea>
        //                 </div>
        //             </div>
        //         </div>
        //     </form>

    );
};

export default AddAProduct;