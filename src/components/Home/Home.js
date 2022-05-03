import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Category from '../Category/Category';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Brands></Brands>
            <Category></Category>
        </div>
    );
};

export default Home;