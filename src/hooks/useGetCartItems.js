import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetCartItems = () => {

    const { user, loading } = useContext(AuthContext);
    const access_token = `Bearer ${localStorage.getItem('access-token')}`;

    const { data: cartItems = [], refetch } = useQuery({
        queryKey: ['cartItems', user?.email],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axios.post(`http://localhost:5000/cartItems/${user?.email}`, { access_token })
            console.log(res.data);
            return res.data;

        }
    });
    return [cartItems, refetch];

}
export default useGetCartItems;

