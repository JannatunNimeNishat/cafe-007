
import { useForm } from "react-hook-form";
import accountsBanner from '../../assets/login/accountsBanner.png'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";
const Login = () => {
    const { singIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        setLoginError('');
        singIn(data.email, data.password)
            .then((result) => {
                // console.log(result);
                navigate('/')
            })
            .catch(error => {
                // console.log(error.message);
                setLoginError(error.message)
            })
    }

    return (
        <div className='bg-[#FFF] '>
            <figure>
                <img src={accountsBanner} alt="" />
            </figure>

            <div className='my-container mt-[35px] mb-10 flex justify-center items-center'>

                {/* login */}
                <form onSubmit={handleSubmit(onSubmit)} className='bg-[#FFF8EE] w-[800px] text-center'>
                    <h3 className='text-[35px] text-[#C33] font-bold'>Login</h3>

                    {/* user name or email */}
                    <div className="form-control w-full max-w-lg mx-auto">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Username or email address *</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered border-[#C33] w-full max-w-lg"
                            {...register('email', { required: true })}
                        />
                    </div>

                    {/* Password*/}
                    <div className="form-control w-full max-w-lg mx-auto">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Password *</span>
                        </label>
                        <input type="password" placeholder="" className="input input-bordered border-[#C33] w-full max-w-lg"

                            {...register('password', { required: true })}
                        />
                    </div>

                    <input className="mt-[15px] px-10 py-2 bg-[#C33] text-white font-bold text-center rounded-[10px] " type="submit" value="Login" />

                    {/* login error */}
                    {loginError && <p className="text-[#C33] py-3">{loginError}</p>}


                    <p className="pt-2">Don't have an account ? <Link to='/register' className="text-[#C33]">Register</Link></p>
                </form>



            </div>
        </div>
    );
};

export default Login;