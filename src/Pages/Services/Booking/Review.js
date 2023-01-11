import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Booking from '../Review/Booking';
import ReviewTable from './ReviewTable';


const Review = ({ service }) => {
  const { user } = useContext(AuthContext)
  // const [reviewData, setReviewData] = useState([]);
  // const data = useLoaderData();
  // setReviewData(data)
  const [data, setData]=useState([]);

  useEffect(()=>{
   fetch(`https://trust-kitchens-server.vercel.app/review`)
   .then(res=>res.json())
   .then (data=> setData(data))
  },[])

  const handleDelete = id => {
    const proceed = window.confirm('are you confirm for delete this review');
    if (proceed) {
      fetch(`https://trust-kitchens-server.vercel.app/review/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount === 1) {
            alert("Successfully deleted one review.");
            
          }
        });
    }
  }
  // const { name, rating, title, textarea, imgURL } = data;
  console.log(data)
  return (
    <div>
<p className="text-center font-bold text-3xl m-6">Service Review</p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full flex-nowrap">

          <thead>
            <tr className="flex flex-nowrap justify-evenly">

              <th >Name </th>
              <th>Review </th>
              <th>title of service</th>

            </tr>
          </thead>
          <tbody>
           
           {data?.length!==0? data.map(review => <ReviewTable
            key={review._id}
            handleDelete={handleDelete}
            review={review}
          ></ReviewTable>): <p className="text-center text-3xl m-6">No Review Added</p>}
          
          </tbody>
        </table>
      </div>
      <Booking user={user} data={data} service={service}></Booking>
    </div>
  );
};

export default Review;