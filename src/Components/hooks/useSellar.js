import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const useSellar = email => {
    const [isSellar, setIsSellar] = useState(false);
    const [isSellarLoading, setIsSellarLoading]=useState(true);
    
    useEffect(() => {
        setIsSellarLoading(true)
        if (email) {
            fetch(`https://seconde-up-server-husain7997.vercel.app/users/sellar/${email}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setIsSellar(data.isSellar);
                    setIsSellarLoading(false)
                })
        }
    }, [email])
    return [isSellar, isSellarLoading];
}
export default useSellar;