import Banner from "../Banner/Banner";
import BigOffer from "../BigOffer/BigOffer";
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
        </div>
    );
};

export default Home;