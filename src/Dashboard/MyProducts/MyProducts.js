import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Components/Firebase/Loading/Loading';
import { AuthContext } from '../../../Context/ContextProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings =[] } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')} `
                }
            });
            const data = await res.json();
            return data
        }
    })
    
    return (
        <div>
            <h3 className='text-3xl my-8'>MyAppointment</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>treatment</th>
                            <th>time</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Array.from(bookings).map((booking, i) => <tr key={i}>
                                <th>{i+1}</th>
                                <th>{booking.name}</th>
                                <th>{booking.treatment}</th>
                                <th>{booking.slot}</th>
                                <th>{booking.selectedDate}</th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;