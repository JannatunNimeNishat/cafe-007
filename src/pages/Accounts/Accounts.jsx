import accountsBanner from '../../assets/accounts/accountsBanner.png'
import { useForm } from "react-hook-form";
const Accounts = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='bg-[#FFF]'>
            <figure>
                <img src={accountsBanner} alt="" />
            </figure>

            <div className='my-container mt-[35px] flex justify-between'>

                {/* login */}
                <form onSubmit={handleSubmit(onSubmit)} className='bg-[#FFF8EE] w-[580px]'>
                    <h3 className='text-[35px] text-[#C33] font-bold'>Login</h3>

                    {/* user name or email */}
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Username or email address *</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered border-[#C33] w-full max-w-xs" 
                        {...register('email', {required:true})}
                        />
                    </div>

                    {/* Password*/}
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Password *</span>
                        </label>
                        <input type="password" placeholder="" className="input input-bordered border-[#C33] w-full max-w-xs" 
                        
                        {...register('password', {required:true})}
                        />
                    </div>

                    <input className="mt-[15px] px-6 py-2 bg-[#C33] text-white font-bold text-center rounded-[10px] " type="submit" value="Login" />

                </form>


                {/* register */}
                <form className='bg-[#FFF8EE]  w-[580px]'>
                    <h3 className='text-[35px] text-[#C33] font-bold'>Register</h3>

                    {/* user name */}
                    <div className="form-control w-full max-w-md ">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Username*</span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered border-[#C33] w-full max-w-md" />
                    </div>

                    {/* user email */}
                    <div className="form-control w-full max-w-md ">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Email*</span>
                        </label>
                        <input type="email" placeholder="" className="input input-bordered border-[#C33] w-full max-w-md" />
                    </div>

                    {/* Password*/}
                    <div className="form-control w-full max-w-md ">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">Password *</span>
                        </label>
                        <input type="password" placeholder="" className="input input-bordered border-[#C33] w-full max-w-md" />
                    </div>

                    {/* Photo URL*/}
                    <div className="form-control w-full max-w-md ">
                        <label className="label">
                            <span className="label-text text-[#C33] text-[18px]">PhotoURL </span>
                        </label>
                        <input type="text" placeholder="" className="input input-bordered border-[#C33] w-full max-w-md" />
                    </div>

                    <input className="mt-[15px] px-6 py-2 bg-[#C33] text-white font-bold text-center rounded-[10px] " type="submit" value="Register" />


                </form>


            </div>
        </div>
    );
};

export default Accounts;