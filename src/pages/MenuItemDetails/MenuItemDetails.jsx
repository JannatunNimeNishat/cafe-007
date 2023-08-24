import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {  useLocation, useNavigate, useParams } from "react-router-dom";

import banner from '../../assets/menuItemDetails/menu_item_banner.png';
import SeeMoreItems from "./SeeMoreItems";
import { AuthContext } from "../../provider/Authprovider";
import Swal from "sweetalert2";
import useGetCartItems from "../../hooks/useGetCartItems";

const MenuItemDetails = () => {
    const _id = useParams();
    const [itemDetails, setItemDetails] = useState('');
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useGetCartItems();

    // getting the food item details
    useEffect(() => {
        setItemDetails('');
        axios.get(`http://localhost:5000/menu_item_details/${_id._id}`)
            .then(res => {
                setItemDetails(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [_id._id]);

    //add to cart
    const handleAddToCart = (item) => {
        if (!user) {
            Swal.fire({
                title: 'You have to Login first?',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })

                }
            })
        }
        else {
            const item_id = item._id;
            delete item._id;
            const addItem = {
                item_id,
                email: user?.email,
                ...item
            }
            const access_token = `Bearer ${localStorage.getItem('access-token')}`;

            axios.post(`http://localhost:5000/add_to_cart/${user?.email}`, { addItem, access_token })
                .then((res) => {
                    // console.log(res);
                    if (res.data.insertedId) {
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
                .catch((error) => {
                    console.log(error.response.status);
                    if (error.response.status === 401 || error.response.status === 403) {
                        logOut()
                            .then(() => {

                                navigate('/login', { state: { from: location } });
                            })
                            .catch((error) => console.log(error))
                    }
                })
        }

    }

    const { food_description, food_img, food_items, food_name, price, category } = itemDetails;

    return (

        <div>
            {/* banner */}
            <div className={`h-[198px] flex justify-center items-end  `} style={{ backgroundImage: `url(${banner})` }}>
                <p className="text-[36px] font-bold text-white mb-5">{food_name}</p>
            </div>

            {/* details */}
            <div className="mt-[30px] px-5 lg:px-0 lg:flex items-center gap-10 my-container">
                {/* left */}
                <div>
                    <figure className="lg:w-[594px] lg:h-[334px]">
                        <img className="h-full w-full" src={food_img?.image_1} alt="" />
                    </figure>
                    <div className=" hidden lg:flex items-center justify-center gap-5   mt-3">
                        <figure className="w-[250px] h-[250px]">
                            <img className="h-full w-full" src={food_img?.image_2} alt="" />
                        </figure>
                        <figure className="w-[250px] h-[250px]">
                            <img className="h-full w-full" src={food_img?.image_3} alt="" />
                        </figure>
                    </div>

                </div>
                {/* right */}
                <div className="mt-5 lg:mt-0">
                    <p className="text-[#2A435D] mb-3"><span className="font-bold text-xl">Description:</span> {food_description}</p>

                    <span className="font-bold text-[#2A435D] ">Items:</span>{food_items?.map((item, index) => <span key={index} className="text-[#2A435D] ">{item},</span>)}
                    <p className="text-[#2A435D] mt-3"> <span className="font-bold text-xl">Category:</span> {category}</p>
                    <p className="text-[#2A435D] mt-3 mb-8"> <span className="font-bold text-xl">Price:</span> ${price}</p>

                    <button onClick={() => handleAddToCart(itemDetails)} className=" bg-[#C33] text-white rounded-[10px] px-8 py-3 font-bold hover:bg-[#C00]">Add to cart</button>

                </div>

            </div>

            {/* see more items */}
            {itemDetails && <SeeMoreItems category={category} />}


        </div>
    );
};

export default MenuItemDetails;