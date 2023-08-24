import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import OurRestaurant from "../OurRestaurant/OurRestaurant";
import PopularDishes from "../PopularDishes/PopularDishes";


const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularDishes/>
            <Menu/>
            <OurRestaurant/>
        </div>
    );
};

export default Home;