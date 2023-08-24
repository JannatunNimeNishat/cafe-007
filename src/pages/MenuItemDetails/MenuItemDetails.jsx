import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import banner from '../../assets/menuItemDetails/menu_item_banner.png';
import SeeMoreItems from "./SeeMoreItems";

const MenuItemDetails = () => {
    const _id = useParams();
    const [itemDetails, setItemDetails] = useState('');

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

   
    const { food_description, food_img, food_items, food_name, price, category } = itemDetails;

    return (

        <div>
            {/* banner */}
            <div className={`h-[198px] flex justify-center items-end  `} style={{ backgroundImage: `url(${banner})` }}>
                <p className="text-[36px] font-bold text-white mb-5">{food_name}</p>
            </div>

            {/* details */}
            <div className="mt-[30px] flex items-center gap-10 my-container">
                {/* left */}
                <div>
                    <figure className="w-[594px] h-[334px]">
                        <img className="h-full w-full" src={food_img?.image_1} alt="" />
                    </figure>
                    <div className="flex items-center justify-center gap-5   mt-3">
                        <figure className="w-[250px] h-[250px]">
                            <img className="h-full w-full" src={food_img?.image_2} alt="" />
                        </figure>
                        <figure className="w-[250px] h-[250px]">
                            <img className="h-full w-full" src={food_img?.image_3} alt="" />
                        </figure>
                    </div>

                </div>
                {/* right */}
                <div>
                    <p className="text-[#2A435D] mb-3"><span className="font-bold text-xl">Description:</span> {food_description}</p>

                    <span className="font-bold text-[#2A435D] ">Items:</span>{food_items?.map((item, index) => <span key={index} className="text-[#2A435D] ">{item},</span>)}
                    <p className="text-[#2A435D] mt-3"> <span className="font-bold text-xl">Category:</span> {category}</p>
                    <p className="text-[#2A435D] mt-3 mb-8"> <span className="font-bold text-xl">Price:</span> ${price}</p>

                    <Link className=" bg-[#C33] text-white rounded-[10px] px-8 py-3 font-bold hover:bg-[#C00]">Add to cart</Link>

                </div>

            </div>

            {/* see more items */}
            { itemDetails && <SeeMoreItems category={category}/> }

            
        </div>
    );
};

export default MenuItemDetails;