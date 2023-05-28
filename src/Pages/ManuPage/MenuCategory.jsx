import Button from "../../Components/Button";
import PopularItem from "../../Shared/PopularItem";

const MenuCategory = ({item , btnChild}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    item.map(itm => <PopularItem
                        key={itm._id}
                        itm={itm}
                    ></PopularItem>)
                }
                <Button
                btnChildren={btnChild}
                ></Button>

            </div>
        </div>
    );
};

export default MenuCategory;