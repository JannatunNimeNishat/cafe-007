
import delivery_img from '../../../assets/delivery/image_delivery.png'
import bike_img from '../../../assets/delivery/bike.png'
const Delivery = () => {
    return (
        <div className='my-container px-10 mt-40'>

            <div className='flex gap-24'>
                <div>
                    <p className='text-[#C33] text-[20px] font-bold '>Delivery</p>
                    <h3 className=' text-[35px] font-bold leading-9 mt-6'><span className='text-[#2A435D]'>A Moments Of</span><br />
                        <span className='text-[#C33]'>Delivered On Right Time & Place</span></h3>

                    <p className='text-[#2A435D] text-[18px] mt-7 leading-6'>Food Khan is a restaurant, bar and coffee roastery located on a <br /> busy corner site in Farringdon's Exmouth Market. With glazed <br /> frontage on two sides of the building, overlooking the market and <br /> a bustling London inteon.</p>

                    <div className='mt-12 flex gap-8'>
                        <div className='text-[#2A435D] leading-5 flex items-center gap-2 mr-8'>
                            <div>
                                <p className='text-[#2A435D] font-bold'>Delivery Order</p>
                                <small className='text-[#2A435D] '>
                                    +880 1743607289
                                </small>
                            </div>
                            <img className='h-10 w-10 ml-1' src={bike_img} alt="" />
                        </div>

                        <button className=' bg-[#C33] px-5 py-2  rounded-[10px] text-white font-bold '>
                            Order Now

                        </button>
                    </div>

                </div>

                <figure>
                    <img src={delivery_img} alt="" />
                </figure>
            </div>

        </div>
    );
};

export default Delivery;