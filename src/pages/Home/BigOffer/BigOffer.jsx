import big_offer_img_1 from '../../../assets/bigg_offer/bigOffer_1.png'
import big_offer_img_2 from '../../../assets/bigg_offer/bigOffer_2.png'
import big_offer_img_3 from '../../../assets/bigg_offer/bigOffer_3.png'

const BigOffer = () => {
    return (
        <div className="">
            <h3 className="text-[#C33] text-[50px] font-bold text-center">Bigg Offer</h3>
            <p className="text-[#2A435D] text-[20px] font-semibold text-center  mb-6">For in this week, take your food, buy your best one.</p>

            <div className='flex gap-3'>
                <figure className='w-[560px] h-[200px]'>
                    <img className='h-full w-full' src={big_offer_img_1} alt="" />

                </figure>
                <figure className='w-[560px] h-[200px]'>
                    <img className='h-full w-full' src={big_offer_img_2} alt="" />

                </figure>
                <figure className='w-[560px] h-[200px]'>
                    <img className='h-full w-full' src={big_offer_img_3} alt="" />

                </figure>
            </div>

        </div>
    );
};

export default BigOffer;