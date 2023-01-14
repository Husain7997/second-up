import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';

const Sellars = () => {
    const {data:users=[], refetch}=useQuery({
        queryKey:[],
        queryFn:async()=>{
            const res =await fetch(`https://seconde-up-server-husain7997.vercel.app/sellar`)
            const data = await res.json();
            return data;
        }
    })

    const [sellar, setSellar]=useState([])

    const handleDelete = id => {
      const proceed = window.confirm('are you confirm for delete this ');
      if (proceed) {
        fetch(`https://seconde-up-server-husain7997.vercel.app/users/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount == 1) {
              alert("Successfully deleted one .")
              const remaining = sellar.filter(rv=>rv._id !== id);
              const presentReview =[...remaining];
              setSellar(presentReview)
            }
          })
      }
    }

    refetch()
    return (
        <div>
            <h2 className="text-3xl">All Sellars</h2>
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
          <td><button onClick={()=>handleDelete(user._id)} className="btn btn-xs btn-denger">Delete</button></td>
        </tr>)
   }
     
    </tbody>
  </table>
</div>
        </div>
    );
};
    

export default Sellars;