
import dish_1 from '../../../assets/popular-dishes/dishes_1.png'
import dish_2 from '../../../assets/popular-dishes/dishes_2.png'
import dish_3 from '../../../assets/popular-dishes/dishes_3.png'
import dish_4 from '../../../assets/popular-dishes/dishes_4.png'
import dish_5 from '../../../assets/popular-dishes/dishes_5.png'

const PopularDishes = () => {
    return (
        <div className="my-container mt-32">

            <p className="text-[#2A435D] font-bold text-[20px] text-center leading-4">Food Items</p>
            <h3 className="text-[#C33] font-bold text-[35px] text-center ">Popular Dishes</h3>

            <div className='flex gap-5 mt-5'>
                <img src={dish_1} alt="" />
                <img src={dish_2} alt="" />
                <img src={dish_3} alt="" />
                <img src={dish_4} alt="" />
                <img src={dish_5} alt="" />
            </div>
        </div>
    );
};

export default PopularDishes;