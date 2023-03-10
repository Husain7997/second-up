import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Components/hooks/useAdmin';
import useSellar from '../../Components/hooks/useSellar';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Navbar from '../../Pages/Sheard/Navbar/Navbar';

const DashboardLayout = () => {
    const {user}=useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email);
    const [isSellar]=useSellar(user?.email);
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <Outlet></Outlet>
                    
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard/myordars'>My Ordars</Link></li>
                       
                       { isSellar || isAdmin &&
                       <>
                       <li><Link to='/dashboard/addproduct'>add product</Link></li>
                        <li><Link to='/dashboard/myproduct'>my product</Link></li>
                       </>}
                       {
                        // 
                         <>
                         {isAdmin &&<><li><Link to='/dashboard/users'>All Users</Link></li>
                         <li><Link to='/dashboard/bayer'>ALL Bayer</Link></li>
                        <li><Link to='/dashboard/sellar'>ALL Sellars</Link></li>
                        
                         </>}
                        </>
                       }
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;