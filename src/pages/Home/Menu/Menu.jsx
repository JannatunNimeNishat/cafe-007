import { useEffect, useState } from "react";
import menu_banner from '../../../assets/menu/menu-banner.png';
import lunch_img from '../../../assets/menu/lunch-img.jpg';
import starter_img from '../../../assets/menu/starter-img.jpg';
import beverages from '../../../assets/menu/beverages.jpg';
import axios from "axios";
import MenuItem from "./MenuItem";
const Menu = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [menuItems, setMenuItems] = useState([]);

    // initial loading
    useEffect(() => {
        axios.get(`http://localhost:5000/menu/Breakfast`)
            .then(res => {
                setMenuItems(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    // get menu items based on category
    const getMenuData = (value, tabIndex) => {
        setActiveTab(tabIndex);
        setMenuItems('');

        axios.get(`http://localhost:5000/menu/${value}`)
            .then(res => {
                setMenuItems(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    console.log(menuItems);

    return (
        <div className="my-container mt-[55px]">

            <div className="text-center">
                <p className="text-[#C33] font-bold text-[20px]">SPECIALS</p>
                <h3 className="text-[#2A435D] text-[35px] font-bold">Check out our menu</h3>
                <p className="text-[#2A435D] text-[15px] ">Demoralized by the charms of pleasure of the moment so blinded except to some advantage.</p>
            </div>

            {/* tab head */}
            <div className="flex justify-between mt-[25px] px-16">

                <p onClick={() => getMenuData('Breakfast', 1)} className={` cursor-pointer px-10 py-3 text-[25px]  text-center  font-semibold
                ${activeTab === 1 ? 'bg-[#C33] text-white ' : 'text-[#C33]'}
                `}>BREAKFAST</p>


                <p onClick={() => getMenuData('Lunch', 2)} className={` cursor-pointer px-10 py-3 text-[25px]   text-center  font-semibold
                ${activeTab === 2 ? 'bg-[#C33] text-white' : 'text-[#C33]'}
                `}>LUNCH</p>

                <p onClick={() => getMenuData('Starters', 3)} className={` cursor-pointer px-10 py-3 text-[25px]   text-center  font-semibold
                ${activeTab === 3 ? 'bg-[#C33] text-white' : 'text-[#C33]'}
                `}>STARTERS</p>

                <p onClick={() => getMenuData('Beverage', 4)} className={` cursor-pointer px-10 py-3 text-[25px]   text-center  font-semibold
                ${activeTab === 4 ? 'bg-[#C33] text-white' : 'text-[#C33]'}
                `}>BEVERAGES</p>

            </div>

            {/* tab content */}
            {/* tab - 1 */}

            <div className={`mt-[18px] px-24 flex gap-2 ${activeTab === 1 ? 'block' : 'hidden'}`}>
                <figure className="w-1/2 h-[686px]">
                    <img src={menu_banner} alt="" />
                </figure>
                <div className="w-1/2 h-[686px]">
                    {
                        menuItems && menuItems?.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </div>


            {/* tab - 2 */}
            <div className={`mt-[18px] px-24 flex gap-5 ${activeTab === 2 ? 'block' : 'hidden'}`}>
                <figure className="w-1/2 h-[686px]">
                    <img src={lunch_img} alt="" />
                </figure>
                <div className="w-1/2 h-[686px]">
                    {
                        menuItems && menuItems?.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </div>

            {/* tab - 3 */}
            <div className={`mt-[18px] px-24 flex gap-5 ${activeTab === 3 ? 'block' : 'hidden'}`}>
                <figure className="w-1/2 h-[686px]">
                    <img src={starter_img} alt="" />
                </figure>
                <div className="w-1/2 h-[686px]">
                    {
                        menuItems && menuItems?.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </div>

            {/* tab - 4 */}
            <div className={`mt-[18px] px-24 flex gap-5 ${activeTab === 4 ? 'block' : 'hidden'}`}>
                <figure className="w-1/2 h-[686px] ">
                    <img src={beverages} alt="" />
                </figure>
                <div className="w-1/2 ">
                    {
                        menuItems && menuItems?.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Menu;