import { useEffect, useRef, useState , useContext} from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate ,validateCaptcha} from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const {logIn} =useContext(AuthContext)
    const [disabled , setDisabled] =useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
 const handleLOgin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email , password);
    logIn(email , password)
    .then(result=>{
        const logedUser =result.user;
        console.log(logedUser)
    })
    .catch(error =>{
        console.log(error.message)
    })

 }


 const capchaInput= useRef(null);
 const validate =()=>{
    const user_captcha_value =capchaInput.current.value;
    // console.log(capchaValue)
    if (validateCaptcha(user_captcha_value)==true) {
        setDisabled(false)
    }
 }
 




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLOgin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email"className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password"className="input input-bordered" />

                                <LoadCanvasTemplate />
                                <div className="form-control">
                                    <input type="text" ref={capchaInput} placeholder="type above capcha" className="input input-bordered" />
                                </div>
                            </div>
                            <button onClick={validate} className="btn btn-block">validate</button>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" disabled={disabled}  type="submit" value="Login" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;