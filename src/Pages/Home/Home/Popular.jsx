import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import PopularItem from "../../../Shared/PopularItem";



const Popular = () => {
    const [menu , setMenu] =useState([])
 useEffect(()=>{
    fetch('/menu.json')
    .then(res =>res.json())
    .then(data =>{
        const popularItems = data.filter(item=>item.category ==='popular');
        setMenu(popularItems);
    })
 } ,[])


    return (
       <section>
        <SectionTitle
        subHeading={"Cheack it out "}
        heading={"from our menu"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
           {
            menu.map(itm =><PopularItem
            key={itm._id}
            itm={itm}
            ></PopularItem>)
           }
        </div>
        <button className="btn btn-outline border-0 border-b-4 mx-auto block my-5">View Full Menu</button>
       </section>
    );
};

export default Popular;