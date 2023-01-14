import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading]=useState(true);
    
    useEffect(() => {
        setIsAdminLoading(true)
        if (email) {
            fetch(`https://seconde-up-server-husain7997.vercel.app/users/admin/${email}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading];
}
export default useAdmin;