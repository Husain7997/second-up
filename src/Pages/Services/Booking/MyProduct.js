import React, { useContext, useEffect, useState } from 'react';
import ProductTable from './ProductTable'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const MyProduct = (id) => {
  const { user } = useContext(AuthContext);
  const [MyProduct, setMyProduct] = useState([]);


  const handleDelete = id => {
    const proceed = window.confirm('are you confirm for delete this review');
    if (proceed) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount == 1) {
            alert("Successfully deleted one review.")
            const remaining = MyProduct.filter(rv=>rv._id !== id);
            const presentReview =[...remaining];
            setMyProduct(presentReview)
          }
        })
    }
  }

  const handleEdit = id => {
    fetch(`http://localhost:5000/product/${id}`, {
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
    fetch(`http://localhost:5000/MyProduct?email=${user.email}`)
      .then(response => response.json())
      .then(data => setMyProduct(data))
    if (MyProduct == null) {
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
              MyProduct.map(review => <ProductTable key={review._id} handleEdit={handleEdit} handleDelete={handleDelete} review={review}></ProductTable>)
            }
          </tbody>
        </table>
      </div>

      {/* <Booking></Booking> */}

    </div>
  );
};

export default MyProduct;