import { Link, NavLink } from 'react-router-dom';

import watch from '../../assets/navbar/sub_header/watch_icon.svg'
import phone from '../../assets/navbar/sub_header/phone_icon.svg'
import deliveryMan from '../../assets/navbar/food1.png'
import logo from '../../assets/navbar/logo.png'


import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {

    const navItems = <>
        <li className=''>
            <NavLink to='/' className={({ isActive }) => isActive ? 'myActive' : ''}>HOME</NavLink>
        </li>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'myActive' : ''}>
                ABOUT
            </NavLink>
        </li>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'myActive' : ''}>
                ITEMS
            </NavLink>
        </li>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'myActive' : ''}>
                CONTACT
            </NavLink>
        </li>


    </>


    return (
        <div>

            {/* subheader */}
            <div className="bg-[#CC3333] h-[35px] hidden lg:flex items-center gap-12 text-white
            ">
                <p className='flex items-center gap-2 ml-20'>
                    <img className='h-[20px]' src={watch} alt="" />
                    <span>7.30 AM - 9.30 PM</span>
                </p>
                <p className='flex items-center gap-2'>
                    <img className='h-[20px]' src={phone} alt="" />
                    <span>+880 01743607289</span>
                </p>
            </div>


            <div className="navbar my-container border">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}

                        </ul>
                    </div>
                    <Link className=" normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex mr-24">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end flex gap-5  -ml-16">
                    <div className='bg-[#2A435D] w-[50px] h-[50px] flex items-center justify-center  rounded-full'>
                        <AiOutlineShoppingCart className='w-[30px] h-[30px] text-white' />
                    </div>

                    <div className='text-[#2A435D] leading-5 flex gap-3 mr-16'>
                        <div>
                            <p className='text-[#2A435D] font-bold'>Delivery Order</p>
                            <small className='text-[#2A435D] '>
                                +880 1743607289
                            </small>
                        </div>
                        <img src={deliveryMan} alt="" />
                    </div>


                    <Link className="px-3 py-2 bg-[#C33] text-white font-bold text-center rounded-[10px] ">Login</Link>
                </div>
            </div>

            
        </div>
    );
};

export default Navbar;