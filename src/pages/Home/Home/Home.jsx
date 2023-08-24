import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import PopularDishes from "../PopularDishes/PopularDishes";


const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularDishes/>
            <Menu/>
        </div>
    );
};

export default Home;