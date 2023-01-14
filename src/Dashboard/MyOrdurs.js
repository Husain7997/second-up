import React, { useContext, useEffect, useState } from 'react';
import ProductTable from '../Pages/Services/Booking/ProductTable'
import { AuthContext } from '../Pages/Context/AuthProvider/AuthProvider';


const MyProduct = (id) => {
  const { user } = useContext(AuthContext);
  const [MyProduct, setMyProduct] = useState([]);


  const handleDelete = id => {
    const proceed = window.confirm('are you confirm for delete this ');
    if (proceed) {
      fetch(`https://seconde-up-server-husain7997.vercel.app/myordars/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount == 1) {
            alert("Successfully deleted one .")
            const remaining = MyProduct.filter(rv=>rv._id !== id);
            const presentReview =[...remaining];
            setMyProduct(presentReview)
          }
        })
    }
  }

  


  useEffect(() => {
    fetch(`https://seconde-up-server-husain7997.vercel.app/myordars?email=${user?.email}`)
      .then(response => response.json())
      .then(data => setMyProduct(data))
    if (MyProduct == null) {
      return 'No data were Added'
    }
}, [])

  return (
    <div>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
<h2 className="text-3xl">My Ordurs</h2>
          <thead>
            <tr className="flex flex-wrap justify-evenly">

              {/* <th >Name </th>
              
              <th>Review </th>
              <th>title of service</th> */}

            </tr>
          </thead>
          <tbody>

            {
              MyProduct.map(product => <ProductTable key={product._id}  handleDelete={handleDelete} product={product}></ProductTable>)
            }
          </tbody>
        </table>
      </div>

      {/* <Booking></Booking> */}

    </div>
  );
};

export default MyProduct;