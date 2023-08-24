import Banner from "../Banner/Banner";
import BigOffer from "../BigOffer/BigOffer";
import Delivery from "../Delivery/Delivery";
import Menu from "../Menu/Menu";
import OurRestaurant from "../OurRestaurant/OurRestaurant";
import PopularDishes from "../PopularDishes/PopularDishes";


const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularDishes/>
            <Menu/>
            <BigOffer/>
            <OurRestaurant/>
            <Delivery/>
        </div>
    );
};

export default Home;