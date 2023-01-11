import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
// import Products from '../../Products/Products/Products';
import HomeComponents from '../HomeComponents/HomeComponents';
import { Link,  } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';
import Categories from '../../Categories/categories/Categories';
import Service from '../../Services/service/Service';


const Home = () => {
  const [homePageService, setHomePageService] = useState([])
  // const [categorydata, setCategorydata] = useState([])
  const [categories, setCategories] = useState([])
  
useEffect(() => {
  fetch('category.json')
      .then(res => res.json())
      .then(data => setCategories(data))
}, [])

  useEffect(() => {
    const url = `http://localhost:5000?size=${3}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setHomePageService(data);
        console.log(data);
      })
  }, [])

  
//   const handleCategory = (name) => {
//     fetch(`http://localhost:5000/category/${name}`)
//         .then(response => response.json())
//         .then(data => setCategorydata(data))
// }
  return (
    <div >
      <Banner></Banner>
      <div className="mt-10 text-center">
      {
                categories.map(category => <Link to={`category/${category.name}`}><button
                  key={category._id}
                  
                  // onClick={() => handleCategory(category.name)}
                  className="btn btn-outline btn-primary ml-10"
              >{category.name}</button></Link>)
            }
      </div>
     
      {/* {

categorydata.map(data =><Categories 
  key={data._id}
  data={data}
  handleCategory={handleCategory}
  ></Categories> )
} */}


      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {
homePageService.map(service => <Service key={service._id}  service={service}></Service>)
        }
      </div>

      <div className="text-center"> <Link to='/Furnitures'>
        <button className="btn btn-primary mt-12 ">See More</button></Link></div>
      <HomeComponents></HomeComponents>

    </div>
  );
};

export default Home;