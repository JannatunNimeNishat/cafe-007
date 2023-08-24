
import { Link } from 'react-router-dom';
import line from '../../../assets/menu/line.png'

const MenuItem = ({ item }) => {
    const { _id,food_name, food_items, price } = item;
    return (
        <div className="w-full cursor-pointer" >
            <Link to={`/menuItemDetails/${_id}`}>
                <h3 className="text-[#C33] text-[25px] font-semibold">{food_name}</h3>
                {
                    food_items.map((item, index) => <span key={index}>{item}</span>)
                }
                <p className='flex items-center gap-3'>
                    <img src={line} alt="" />
                    <span className="text-[#C33] font-semibold">${price}</span>
                </p>
            </Link>
        </div>
    );
};

export default MenuItem;