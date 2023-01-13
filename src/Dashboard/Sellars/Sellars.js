import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import { toast } from 'react-hot-toast';

const Sellars = () => {
    const {data:users=[], refetch}=useQuery({
        // queryKey:['sellar'],
        queryFn:async()=>{
            const res =await fetch(`http://localhost:5000/sellar`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
   {
    users.map((user, i) =>
        <tr key={i}>
          <th>{i+1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
         
          {/* <td>{  user?.role!=='admin' &&<button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td> */}
          <td><button className="btn btn-xs btn-denger">Delete</button></td>
        </tr>)
   }
     
    </tbody>
  </table>
</div>
        </div>
    );
};
    

export default Sellars;