import React from 'react'
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { checkUserAsync, selectError, selectLoggedInUser } from '../authSlice';


export default function Login() {
  // for differnt user role 
  const location = useLocation();
  const { userType } = location.state || {};

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const user = useSelector(selectLoggedInUser);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <>
    {/* if user exsist in loggedinuser, that mean logIn successFull then it will navigate to '/' */}
    {user && <Navigate to='/clientdashboard' replace={true}></Navigate>}
    <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* link Icon to home page  */}
        <Link to='/'>
          <h1 className='text-3xl font-bold'>LawSoft</h1>
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log in as {userType}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form 
        noValidate
        onSubmit={handleSubmit(
          userType === 'Client' ? 
            (data)=>{
            dispatch(checkUserAsync({mobileNo: data.mobileNo, password: data.password}))
            console.log(data)
            } :
          userType === 'lawyer' ? 
            console.log("lawyer dispatch")
          :
            console.log("MTS")
          
        )}
        className="space-y-6">
          <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Mobile No
            </label>
            <div className="mt-2">
            <input
                id="mobileNo"
                {...register("mobileNo", {
                  required: "mobileNo no is requred",
                  pattern: {
                    value: /^(0|91)?[6-9][0-9]{9}$/g,
                    message: "Enter a Valid Number"
                  }
                })}
                type="number"
                required
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {errors.mobileNo && <p className='text-red-500 text-left'>{errors.mobileNo.message}</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                {...register("password", {required:"Password is required"})}
                type="password"
                required
                autoComplete="current-password"
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {/* showing error massage from the store's state  */}
              {error && <p className='text-red-500'>{error.message}</p>}
            </div>
          </div>

          <div>
            
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>

          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" state={{ userType }} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </>
  )
}
