const PopularItem = ({ itm }) => {
    const { name, image, price, recipe } = itm;
    return (
        <div className="flex gap-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p> $ {price}</p>
        </div>
    );
};

export default PopularItem;