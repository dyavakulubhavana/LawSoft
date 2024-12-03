import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { createUserAsync } from '../authSlice';


export default function Signup() {
  // for differnt user role 
  const location = useLocation();
  const { userType } = location.state || {};

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* link Icon to home page  */}
        <Link to='/'>
          <h1 className='text-3xl font-bold'>LawSoft</h1>
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account as {userType}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          noValidate
          onSubmit={handleSubmit((data) => {
            dispatch(createUserAsync({...data}))
            // dispatch(createUserAsync({ email: data.email, password: data.password, addresses:[] }))
            console.log(data)
          })}
          className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                {...register("name", { required: "name is requred", pattern:{
                  value: /(?:(\w+-?\w+)) (?:(\w+))(?: (\w+))?$/g,
                  message: "Enter a valid Name"
                } })}
                type="text"
                required
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {errors.name && <p className='text-red-500 text-left'>{errors.name.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="aadhaar" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Aadhaar No
            </label>
            <div className="mt-2">
              <input
                id="aadhaar"
                {...register("aadhaar", { required: "Aadhaar no is requred", pattern:{
                  value: /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/,
                  message: "Enter a valid 12 digit Aadhar no"
                } })}
                type="number"
                required
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {errors.aadhaar && <p className='text-red-500 text-left'>{errors.aadhaar.message}</p>}
            </div>
          </div>
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
            </div>
            <div className="mt-2">
              <input
                id="password"
                {...register("password",
                  {
                    required: "password no is requred",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: "- at least 8 characters \n - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n - Can contain special characters"
                    }
                  })}
                type="password"
                required
                autoComplete="current-password"
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && <p className='text-red-500 text-left'>{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between mt-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                {...register("confirmPassword",
                  {
                    required: "Confirm Password no is requred",
                    validate: (value, formValues) => value === formValues.password || "Password Not Match"
                  })}
                type="password"
                required
                autoComplete="current-password"
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.confirmPassword && <p className='text-red-500 text-left'>{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" state={{ userType }} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}
