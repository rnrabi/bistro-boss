import { Link } from "react-router-dom";

const Button = ({ btnChildren,title }) => {
   
    return (
        <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mx-auto block my-5">{btnChildren}</button>
        </Link>

    );
};

export default Button;