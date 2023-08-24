import useGetCartItems from "../../hooks/useGetCartItems";

import cartBanner from '../../assets/cart/cartBanner.png'
import CartItem from "./CartItem";

const Cart = () => {
    const [cartItems, refetch] = useGetCartItems();
    console.log(cartItems);
    return (
        <div>

            <div className={`h-[198px] flex justify-center items-end  `} style={{ backgroundImage: `url(${cartBanner})` }}>
                <p className="text-[36px] font-bold text-white mb-5">My Cart</p>
            </div>

            {/* cart table */}
            <div className="overflow-x-auto my-container">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#C33] text-white text-[20px] h-[60px]">
                        <tr>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cartItems?.map(item => <CartItem key={item._id}
                                item={item}
                            ></CartItem>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Cart;