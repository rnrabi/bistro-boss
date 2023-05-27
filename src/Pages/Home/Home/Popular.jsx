import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import PopularItem from "./PopularItem";


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
       </section>
    );
};

export default Popular;