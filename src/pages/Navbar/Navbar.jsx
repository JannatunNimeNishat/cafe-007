import { Link, NavLink } from 'react-router-dom';

import watch from '../../assets/navbar/sub_header/watch_icon.svg'
import phone from '../../assets/navbar/sub_header/phone_icon.svg'
import deliveryMan from '../../assets/navbar/food1.png'
import logo from '../../assets/navbar/logo.png'


import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';

import { BiSolidUser } from "react-icons/bi";
import useGetCartItems from '../../hooks/useGetCartItems';



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cartItems] = useGetCartItems();

    const navItems = <>
        <li className=''>
            <NavLink to='/' className={({ isActive }) => isActive ? 'myActive' : ''}>HOME</NavLink>
            {/* <NavLink to='/' className={`bg-white text-white`}>HOME</NavLink> */}
        </li>
        <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'myActive' : ''}>
                ABOUT
            </NavLink>
        </li>
        <li>
            <NavLink to='/items' className={({ isActive }) => isActive ? 'myActive' : ''}>
                ITEMS
            </NavLink>
        </li>



        <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'myActive' : ''}>
                CONTACT
            </NavLink>
        </li>



    </>



    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className='shadow-xl'>

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


            <div className="navbar my-container  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}

                        </ul>
                    </div>
                    <Link className=" hidden lg:block normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex mr-24">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end flex gap-4  -ml-16">


                    <div className='bg-[#2A435D] w-[50px] h-[50px] flex flex-col items-center justify-center  rounded-full'>
                        <small className='text-[#FFF8EE] font-bold'>
                            {cartItems && cartItems?.length}
                        </small>
                        <Link to='/cart'>
                            <AiOutlineShoppingCart className='w-[30px] h-[30px] text-[#FFF8EE] -mt-1' />
                        </Link>
                    </div>


                    <div className='text-[#2A435D] leading-5 hidden lg:flex items-center gap-2 mr-8'>
                        <div>
                            <p className='text-[#2A435D] font-bold'>Delivery </p>
                            <small className='text-[#2A435D] '>
                                +880 1743607289
                            </small>
                        </div>
                        <img className='h-10 w-10 ml-1' src={deliveryMan} alt="" />
                    </div>
                    {
                        user && user?.photoURL ?
                            <figure className='h-10 w-10 rounded-full mr-2 hidden lg:block'>
                                <img className='h-full w-full rounded-full' src={user?.photoURL} />

                            </figure>
                            :
                            <BiSolidUser className='h-8 w-8 mr-2 hidden lg:block' />
                    }

                    {
                        user ?
                            <Link onClick={handleLogout} className="px-3 py-2 bg-[#C33] text-white font-bold text-center rounded-[10px] hover:bg-[#C00]">Logout</Link>
                            :
                            <Link to='/login' className="px-3 py-2 bg-[#C33] text-white font-bold text-center rounded-[10px] hover:bg-[#C00]">Login</Link>
                    }


                </div>
            </div>


        </div>
    );
};

export default Navbar;