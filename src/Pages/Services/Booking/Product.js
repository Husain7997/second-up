import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Booking from '../Product/Booking';
import ProductTable from './ProductTable';


const Product = ({ service }) => {
  const { user } = useContext(AuthContext)
  // const [ProductData, setProductData] = useState([]);
  // const data = useLoaderData();
  // setProductData(data)
  const [data, setData]=useState([]);

  useEffect(()=>{
   fetch(`https://seconde-up-server-husain7997.vercel.app/Product`)
   .then(res=>res.json())
   .then (data=> setData(data))
  },[])

  const handleDelete = id => {
    const proceed = window.confirm('are you confirm for delete this Product');
    if (proceed) {
      fetch(`https://seconde-up-server-husain7997.vercel.app/Product/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount === 1) {
            alert("Successfully deleted one Product.");
            
          }
        });
    }
  }
 

  return (
    <div>
<p className="text-center font-bold text-3xl m-6">Service Product</p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full flex-nowrap">

          <thead>
            <tr className="flex flex-nowrap justify-evenly">

              <th >Name </th>
              <th>Product </th>
              <th>title of service</th>

            </tr>
          </thead>
          <tbody>
           
           {data?.length!==0? data.map(Product => <ProductTable
            key={Product._id}
            handleDelete={handleDelete}
            Product={Product}
          ></ProductTable>): <p className="text-center text-3xl m-6">No Product Added</p>}
          
          </tbody>
        </table>
      </div>
      <Booking user={user} data={data} service={service}></Booking>
    </div>
  );
};

export default Product;