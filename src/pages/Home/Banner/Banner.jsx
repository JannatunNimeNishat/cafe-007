import bannerImg from '../../../assets/banner/bannerImg.png'
import { AiFillFacebook,AiFillInstagram,AiFillLinkedin } from "react-icons/ai";
const Banner = () => {
    return (
        <div className="mt-8 my-container">

            <div className="w-10/12 mx-auto flex  gap-5">
                <div className="">
                    <p className="text-[#C33] text-[20px] font-semibold">Best In Town</p>
                    <h3 className="leading-tight mt-[11px] text-[50px] font-semibold text-[#2A435D]">ENJOY OUR CHICKEN <br /> <span className="text-[#C33]">BURGER</span> FAST FOOD</h3>

                    <div className='flex gap-4 justify-end mt-[50px]'>
                        <button className=' px-5 py-2 my-btn'>Order Now</button>
                        <h4 className='text-[25px] my-text-color'>Price: $10.50</h4>
                    </div>
                </div>
                <figure>
                    <img src={bannerImg} alt="" />
                </figure>
            </div>


            <div className='flex gap-[13px]'>
                <AiFillFacebook className='text-[#C33] h-[31px] w-[31px]' />
                <AiFillInstagram className='text-[#C33] h-[31px] w-[31px]' />
                <AiFillLinkedin className='text-[#C33] h-[31px] w-[31px]' />
            </div>


        </div>
    );
};

export default Banner;