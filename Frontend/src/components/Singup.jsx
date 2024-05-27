import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

import { useForm } from "react-hook-form"


const Singup = () => {


  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <> 
  

<div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Singup now!</h1>
      <p className="py-6">Enter your personal details and start journey with us</p>
    </div>
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      <h3 className="font-bold text-lg">Singup</h3>


     
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered input-primary " required
                      {...register("Name", { required: true })}

           />
           {/* <br/>

{errors.Name && <span className="text-sm text-red-600">This field is required</span>} */}

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered input-primary " required
                        {...register("email", { required: true })}

          />
          {/* <br/>
{errors.email && <span className="text-sm text-red-600">This field is required</span>} */}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered input-primary "  required
                      {...register("password", { required: true })}

           />
           {/* <br/>
{errors.password && <span className="text-sm text-red-600">This field is required</span>} */}

         
        </div>
        {/* <div className="form-control mt-6">
          <button className="btn btn-primary">Singup</button>
        </div> */}
        <div className=" flex justify-around gap-6 w-96">
          {/* <button className="btn btn-primary">Login</button> */}
          <button className="btn btn-outline btn-primary w-28
            ">Singup</button>


          
          <p className='p-5'> Have account? 
          <button>
           <span className="underline text-blue-500 cursor-pointer"
           onClick={()=> document.getElementById("my_modal_3").showModal()}>

           Login</span>
          </button>{""}
          <Login/>
          </p>
        </div>
        

      </form>
    </div>
  </div>
  
</div>


    </>
  )
}

export default Singup
