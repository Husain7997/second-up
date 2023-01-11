import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
// import Service from '../../Services/service/Service';
import Category from './Category';

const Categories = () => {
  const categoryDatas = useLoaderData()

console.log(categoryDatas)
  return (
    <div className="mt-10 text-center">

      {
        categoryDatas.map(categoryData => <Category
          key={categoryData._id}
          categoryData={categoryData}
        ></Category>)
      }
    </div>
  );
};

export default Categories;