import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form  className="card-body" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
onClick={()=> document.getElementById("my_modal_3").close()}
>✕
    </Link>
    <h3 className="font-bold text-lg">Login</h3>

      {/* <form  onSubmit={handleSubmit(onSubmit)}  className="card-body"> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered  input-primary  " required
            {...register("email", { required: true })}


          />
          {/* <br/>
                {errors.email && <span className="text-sm text-red-600">This field is required</span>} */}

        </div>
        <div className="form-control">
        {/* >>>>>>>>>>>>>> */}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered input-primary " required
            {...register("password", { required: true })}

          />
                    {/* <br/>
                {errors.password && <span className="text-sm text-red-600">This field is required</span>} */}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* >>>>>>>>>>>>>>>>>>>> */}
        <div className=" flex justify-around gap-16">
          {/* <button className="btn btn-primary">Login</button> */}
          <button className="btn btn-outline btn-primary w-36 ">Login</button>
          
          <p> Not registered? {""}
<Link to="/singup" className="underline text-blue-500 cursor-pointer">
Singup
</Link>{""}

</p>

        </div>
      </form> 
      {/* </form> */}
  
    </div>

  
</dialog>
    </div>
    
  )
}

export default Login
