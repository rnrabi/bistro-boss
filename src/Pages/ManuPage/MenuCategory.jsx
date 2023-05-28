
import PopularItem from "../../Shared/PopularItem";
import {Link} from "react-router-dom"

const MenuCategory = ({ item, btnChild , title }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    item.map(itm => <PopularItem
                        key={itm._id}
                        itm={itm}
                    ></PopularItem>)
                }
                {/* <Button
                btnChildren={btnChild}
                ></Button> */}
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mx-auto block my-5">{btnChild}</button>
                </Link>

            </div>
        </div>
    );
};

export default MenuCategory;