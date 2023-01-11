import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';

const Review = (id) => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);


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
          if (data.deletedCount == 1) {
            alert("Successfully deleted one review.")
            const remaining = myReview.filter(rv=>rv._id !== id);
            const presentReview =[...remaining];
            setMyReview(presentReview)
          }
        })
    }
  }

  const handleEdit = id => {
    fetch(`https://trust-kitchens-server.vercel.app/review/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'ok' })
    })
    .then(response => response.JSON())
    .then
    (data=> {
      console.log(data);
    })
  };


  useEffect(() => {
    fetch(`https://trust-kitchens-server.vercel.app/myreview?email=${user.email}`)
      .then(response => response.json())
      .then(data => setMyReview(data))
    if (myReview == null) {
      return 'No review were Added'
    }
  }, [user?.email])

  return (
    <div>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">

          <thead>
            <tr className="flex flex-nowrap justify-evenly">

              <th >Name </th>
              <th>Review </th>
              <th>title of service</th>

            </tr>
          </thead>
          <tbody>

            {
              myReview.map(review => <ReviewTable key={review._id} handleEdit={handleEdit} handleDelete={handleDelete} review={review}></ReviewTable>)
            }
          </tbody>
        </table>
      </div>

      {/* <Booking></Booking> */}

    </div>
  );
};

export default Review;