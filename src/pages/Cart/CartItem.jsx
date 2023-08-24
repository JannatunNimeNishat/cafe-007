
import axios from "axios";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import useGetCartItems from "../../hooks/useGetCartItems";
import Swal from "sweetalert2";

const CartItem = ({ item }) => {

    const { _id, food_img, food_name, price } = item;
    const [, refetch] = useGetCartItems();
    const [quantity, setQuantity] = useState(1);
    const total = price * quantity;

    const handleDelete = (_id) => {
        console.log(_id);
        axios.delete(`https://cafe-007-server.vercel.app/delete_cart_item/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully added to the cart',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
            .catch(error => console.log(error))
    }

    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            <img src={food_img?.image_1} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <p className="font-semibold ">{food_name}</p>

            </td>
            <td>${price}</td>
            <td className="flex gap-8 items-center mt-3 ">
                <AiOutlinePlus onClick={() => setQuantity(quantity + 1)} className="w-5 h-5 cursor-pointer" />

                <p className="text-xl ">{
                    quantity >= 0 ? quantity : 0
                }</p>

                <AiOutlineMinus onClick={() => setQuantity(quantity - 1)} className="w-5 h-5 cursor-pointer" />
            </td>
            <td>${total >= 0 ? total : 0}</td>
            <th className="flex items-center gap-3 ">
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs"><AiOutlineClose className="h-6 w-6 text-[#C33]" /></button>
                <button className="btn bg-[#C33] hover:bg-[#C00] text-white btn-xs">Check out</button>
            </th>
        </tr>
    );
};

export default CartItem;