import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import offer_img from '../../assets/menuItemDetails/image_itemsList_ooffer.png'

const SeeMoreItems = ({ category }) => {
  
    const [moreItems, setMoreItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/menu/${category}`)
            .then(res => setMoreItems(res.data))
            .catch(error => console.log(error))
    }, [category]);
    return (
        <div className="mt-[100px] my-container">

            <h3 className="text-[#C33] text-[35px] font-bold text-center">See more items</h3>

            <div className="mt-[40px] grid grid-cols-1 lg:grid-cols-2 gap-[20px] px-5 lg:px-0">
                {
                    moreItems?.slice(1, 5).map(item => <div key={item._id}
                        className="lg:flex items-center gap-3 lg:w-[588px] lg:h-[170px] rounded-[20px] shadow-md px-5 py-5 border hover:shadow-2xl "
                    >
                        <div>
                            <Link to={`/menuItemDetails/${item?._id}`} className="font-bold text-[#2A435D] text-[20px] hover:text-[#C33]">{item.food_name}</Link>
                            <p className="mt-[10px] text-[#2A435D] text-[18px]">{item.food_description}</p>
                            <p className="mt-[10px] font-bold text-[#2A435D] text-[20px]">From ${item.price}</p>
                        </div>
                        <figure className="h-[150px] lg:w-[180px] rounded-[20px]">
                            <img className="h-full w-full rounded-[20px]" src={item?.food_img?.image_2} alt="" />

                        </figure>

                    </div>)
                }
            </div>

            <figure className="py-[31px]">
                <img src={offer_img} alt="" />
            </figure>



        </div>
    );
};

export default SeeMoreItems;