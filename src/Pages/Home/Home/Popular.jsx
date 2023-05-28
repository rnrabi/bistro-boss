
import SectionTitle from "../../../Components/SectionTitle";
import PopularItem from "../../../Shared/PopularItem";
import useMenu from "../../../Hooks/useMenu";
import Button from "../../../Components/Button";



const Popular = () => {
 const [menu] = useMenu();
 const popular = menu.filter(item =>item.category ==='popular');


    return (
       <section>
        <SectionTitle
        subHeading={"Cheack it out "}
        heading={"from our menu"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
           {
            popular.map(itm =><PopularItem
            key={itm._id}
            itm={itm}
            ></PopularItem>)
           }
        </div>
           <Button
            btnChildren={"View Full Menu"}
           ></Button>

        {/* <button className="btn btn-outline border-0 border-b-4 mx-auto block my-5">View Full Menu</button> */}

       </section>
    );
};

export default Popular;