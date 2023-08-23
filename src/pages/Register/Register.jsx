import { useForm } from "react-hook-form";
import accountsBanner from '../../assets/login/accountsBanner.png'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/Authprovider";

const Register = () => {

    const { singUp,updateUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [registerError, setRegisterError] = useState('');

    const onSubmit = data => {
        console.log(data);
        setRegisterError('')
        singUp(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUser(data.name, data.photoURL)
                .then(()=>{

                })
                .catch(error =>{
                    console.log(error);
                })

            })
            .catch(error => {
                setRegisterError(error.message)
            })
    };


    return (
        <div className='bg-[#FFF]'>
            <figure>
                <img src={accountsBanner} alt="" />
            </figure>

            <div className='my-container mt-[35px] flex justify-center'>

                {/* register */}
                <form onSubmit={handleSubmit(onSubmit)} className='bg-[#FFF8EE]  w-[800px] text-center'>
                    <h3 className='text-[35px] text-[#C33] font-bold'>Register</h3>

                    {/* user name */}
                    <div className="form-control w-full max-w-lg mx-auto">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Username*</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered border-[#C33] w-full max-w-lg"
                            {...register('name', { required: true })}
                        />
                    </div>

                    {/* user email */}
                    <div className="form-control w-full max-w-lg mx-auto">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Email*</span>
                        </label>
                        <input type="email" placeholder="" className="input input-bordered border-[#C33] w-full max-w-lg"

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

                    {/* Photo URL*/}
                    <div className="form-control w-full max-w-lg mx-auto">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">PhotoURL </span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered border-[#C33] w-full max-w-lg"
                            {...register('photoURL', {})}
                        />
                    </div>

                    <input className="mt-[15px] px-10 py-2 bg-[#C33] text-white font-bold text-center rounded-[10px] " type="submit" value="Register" />
                    {/* register error */}
                    { registerError && <p className="text-[#C33] py-3">registerError</p> }
                    <p className="pt-2">Already have an account ? <Link to='/login' className="text-[#C33]">Login</Link></p>

                </form>


            </div>
        </div>
    );
};

export default Register;