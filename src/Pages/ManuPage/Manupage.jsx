import Cover from "../../Components/Cover";
import bg1 from "../../assets/dessert-bg.jpeg";
import bg2 from "../../assets/pizza-bg.jpg";
import bg3 from "../../assets/salad-bg.jpg";
import bg4 from "../../assets/soup-bg.jpg";
import Popular from "../Home/Home/Popular";

const Manupage = () => {
    return (
        <div>
            <Cover
             img={bg1}
             title={'OUR MENU'}
            ></Cover>
           <Popular></Popular>

            <Cover
             img={bg2}
             title={'OUR MENU'}
            ></Cover>
           <Popular></Popular>

            <Cover
             img={bg3}
             title={'OUR MENU'}
            ></Cover>
           <Popular></Popular>

            <Cover
             img={bg4}
             title={'OUR MENU'}
            ></Cover>
           <Popular></Popular>
        </div>
    );
};

export default Manupage;