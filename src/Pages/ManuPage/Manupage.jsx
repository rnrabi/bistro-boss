import Cover from "../../Components/Cover";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import bg1 from "../../assets/dessert-bg.jpeg";
import bg2 from "../../assets/pizza-bg.jpg";
import bg3 from "../../assets/salad-bg.jpg";
import bg4 from "../../assets/soup-bg.jpg";
import MenuCategory from "./MenuCategory";

const Manupage = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Cover
                img={bg1}
                title={'OUR MENU'}
            ></Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"today's offer"}
            ></SectionTitle>
            <MenuCategory
                item={offered}
                btnChild={"Order Your Favourit Food"}
                title={"offered"}
            ></MenuCategory>

            <Cover
                img={bg2}
                title={"Dessert's"}
            ></Cover>
            <MenuCategory
                item={dessert}
                btnChild={"Order Your Favourit Food"}
                title={"dessert"}
            ></MenuCategory>

            <Cover
                img={bg2}
                title={"Pizza"}
            ></Cover>
            <MenuCategory
                item={pizza}
                btnChild={"Order Your Favourit Food"}
                title={"pizza"}
            ></MenuCategory>
            <Cover
                img={bg3}
                title={"Salad"}
            ></Cover>
            <MenuCategory
                item={salad}
                btnChild={"Order Your Favourit Food"}
                title={"salad"}
            ></MenuCategory>
            <Cover
                img={bg4}
                title={"Soups"}
            ></Cover>
            <MenuCategory
                item={soup}
                btnChild={"Order Your Favourit Food"}
                title={"soup"}
            ></MenuCategory>


        </div>
    );
};

export default Manupage;