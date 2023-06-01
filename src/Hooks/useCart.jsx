import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);


    const { isLoading, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return res.json();
        },
    })
return [isLoading , cart]

};

export default useCart;