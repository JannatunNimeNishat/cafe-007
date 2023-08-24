import ourRestaurant_img_1 from '../../../assets/OurRestaurant/image_ourResturant_1.png'
import ourRestaurant_img_2 from '../../../assets/OurRestaurant/image_ourResturant_2.png'
import ourRestaurant_img_3 from '../../../assets/OurRestaurant/image_ourResturant_3.png'
import arrow from '../../../assets/OurRestaurant/arrow.svg'
import growth from '../../../assets/OurRestaurant/growth.png'
import cooking from '../../../assets/OurRestaurant/cooking.png'

const OurRestaurant = () => {
    return (
        <div className="my-container lg:flex gap-12 mt-16 lg:mt-56 px-5">
            <div>
                <div className='lg:flex gap-2'>
                    <figure className='lg:w-[230px] lg:h-[153px]'>
                        <img className='h-full w-full' src={ourRestaurant_img_1} alt="" />
                    </figure>
                    <figure className='lg:w-[230px] lg:h-[153px]'>
                        <img className='h-full w-full' src={ourRestaurant_img_2} alt="" />
                    </figure>
                </div>
                <figure className='lg:w-[470px] lg:h-[320px] mt-2'>
                    <img className='h-full w-full' src={ourRestaurant_img_3} alt="" />
                </figure>
            </div>
            <div className='mt-5 lg:-mt-20'>
                <p className="text-[#C33] font-bold text-[20px]  ">OUR RESTAURANT</p>
                <h3 className="text-[#2A435D] font-bold text-[25px] lg:text-[35px] lg:leading-9 mt-2 ">For every specialoccasion <br /> there’s heritaste</h3>
                <p className='text-[#2A435D] font-semibold mt-4 text-[18px] leading-5'>Indignation and dislike men who are so beguiled demoralized by the charms of pleasure of the moment. Success Story.</p>

                {/*  */}
                <div className='mt-12'>

                    <div className='flex gap-5 '>
                        <div className='w-[90px] h-[90px] rounded-full border-4 border-[#C33] flex items-center justify-center'>
                            <figure >
                                <img src={growth} alt="" />
                            </figure>
                        </div>
                        <div className=''>
                            <h3 className='text-[#C33] font-bold text-[25px] lg:text-[35px]'>Success Story</h3>
                            <p className='text-[#2A435D] font-semibold  text-[18px] leading-5'>Certain circumstances and owing to the claims <br /> of duty obligations of business it will frequently.</p>
                            <button className=' lg:ml-20 bg-[#C33] px-3 py-1 flex items-center gap-3 rounded-[10px] text-white font-bold mt-4'>
                                Read More
                                <img src={arrow} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className='flex gap-5 mt-8'>
                        <div className='w-[90px] h-[90px] rounded-full border-4 border-[#C33] flex items-center justify-center'>
                            <figure >
                                <img src={cooking} alt="" />
                            </figure>
                        </div>
                        <div className=''>
                            <h3 className='text-[#C33] font-bold text-[25px] lg:text-[35px]'>Passionate Chefs</h3>
                            <p className='text-[#2A435D] font-semibold  text-[18px] leading-5'>Duty or the obligations of business it frequently occur <br /> pleasures have to be repudiated.</p>
                            <button className=' lg:ml-20 bg-[#C33] px-3 py-1 flex items-center gap-3 rounded-[10px] text-white font-bold mt-4'>
                                Read More
                                <img src={arrow} alt="" />
                            </button>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default OurRestaurant;