import React, { useState } from 'react'
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { checkMtsAsync, checkUserAsync, selectError, selectLoggedInMTS, selectLoggedInUser } from '../authSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function Login() {
  // for differnt user role 
  const location = useLocation();
  const { userType } = location.state || {};

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const user = useSelector(selectLoggedInUser);
  const MTS = useSelector(selectLoggedInMTS);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  // For Show And Hide Password 
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(true);
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(true);
      setType('text')
    } else {
      setIcon(false)
      setType('password')
    }
  }

  return (
    <>
      {/* if user exsist in loggedinuser, that mean logIn successFull then it will navigate to '/' */}
      {user && <Navigate to='/clientdashboard' replace={true}></Navigate>}
      {MTS && <Navigate to='/mts/home' replace={true}></Navigate>}
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-300">
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
              (data) => {
                if (userType === 'Client') {
                  dispatch(checkUserAsync({ mobileNo: data.mobileNo, password: data.password }));
                  console.log(data);
                } 
                else if (userType === 'lawyer') {
                  alert("lawyer log")
                } 
                else {
                  // Here I Have to despatch MTS logIn 
                  dispatch(checkMtsAsync({ mobileNo: data.mobileNo, password: data.password }))
                }
              }
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
                {userType === "Client" ?
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> : null}
              </div>
              <div className="mt-2 flex">
                <input
                  id="password"
                  {...register("password", { required: "Password is required" })}
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span class="flex items-center -ml-10" onClick={handleToggle}>
                  {icon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </span>
              </div>
              {/* showing error massage from the store's state  */}
              {error && <p className='text-red-500'>{error.message}</p>}
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

          {userType === "Client" ?
            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/signup" state={{ userType }} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign Up
              </Link>
            </p> : null}
        </div>
      </div >
    </>
  )
}
