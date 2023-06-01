import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ itm }) => {
    const { name, image, price, recipe } = itm;
    const {user} =useContext(AuthContext);
    const navigate =useNavigate()

    const handleAddToCart=(itm)=>{
        console.log(itm)
      if(user){
        const cartItem ={name, image , price , recipe}
        fetch(`http://localhost:5000/carts` ,{
            method:'POST',
            headers:{
                "constent-type": "application/json"
            },
            body:JSON.stringify(cartItem)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        })
      }

      else{
        Swal.fire({
            title: 'First Log in?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
            navigate('/login')
            }
          })
      }



    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="bg-amber-500 absolute right-10 top-10">$ {price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={()=>{handleAddToCart(itm)}} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;