import { AuthContext } from "../../../../Provider/AuthProvider";
import {useContext} from "react";

const SignUp = () => {
    const {signUp}=useContext(AuthContext);

 const handleSignUp = event =>{
    event.preventDefault();
    const form =event.target;
    const name=form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email , password)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(error =>{
        console.log(error.message)
    })
 }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <input type="text" placeholder="name" name="name"className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="email" name="email"className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <input type="password" placeholder="password" name="password"className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;