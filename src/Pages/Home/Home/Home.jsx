import Bannar from "./Bannar";
import OrderSlider from "./OrderSlider";
import Popular from "./Popular";



const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <OrderSlider></OrderSlider>
           <Popular></Popular>
            <h2>This is home page</h2>
           
        </div>
    );
};

export default Home;