import React from 'react';

const ProductTable = ({ product, handleDelete, handleEdit }) => {

  const { title, rating, description, picture, _id, price, status, email } = product;

  console.log(product);
  return (
    <div>
      <tr className="flex-wrap w-full">

        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
        <th>
          <button onClick={() => handleEdit(_id)} className="btn btn-ghost btn-xs"> {status ? status : 'Edit'}</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">rating: {rating}</div>
            </div>
          </div>
        </td>
        <td className="flex flex-nowrap">
          <p>{description}</p>
          <br />

        </td>
        <td className='break-normal' ><p style={{ width: '0px' }}>{email?.slice(0, 20)}...</p></td>

      </tr>
    </div>
  );
};

export default ProductTable;