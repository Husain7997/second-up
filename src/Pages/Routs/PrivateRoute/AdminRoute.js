import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../../Components/hooks/useAdmin';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AdminRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const [isAdmin, isAdminLoading]=useAdmin(user?.email)
    const location = useLocation();
  
  
    if (user && isAdmin) {
      return children;
      }

 if (loading || isAdminLoading) {
   return <progress className="progress w-56 justify-center"></progress>
 }
 
    return <Navigate to='/login'  state={{from:location}} replace></Navigate>
};

export default AdminRoute;