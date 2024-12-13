import React, { useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createLawyerAsync } from '../mtsSlice';

export const MtsDashboard = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [ShowLawyerForm, setShowLawyerForm] = useState(false);
    const [ShowJudgeForm, setShowJudgeForm] = useState(false)
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
        <div>

            <div className='flex justify-center gap-10 w-full'>
                <button
                    onClick={e => {
                        if (ShowJudgeForm) {
                            setShowJudgeForm(false);
                            setShowLawyerForm(true);
                        } else {
                            setShowLawyerForm(!ShowLawyerForm);
                        }
                    }}
                    type="submit"
                    className={`rounded-md my-5 ${ShowLawyerForm ? `bg-red-600 hover:bg-red-500` : `bg-green-600 hover:bg-green-500`} px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                    {!ShowLawyerForm ? "Open" : "Close"} Register Lawyer Form
                </button>

                <button
                    onClick={e => {
                        if (ShowLawyerForm) {
                            setShowLawyerForm(false);
                            setShowJudgeForm(true);
                        } else {
                            setShowJudgeForm(!ShowJudgeForm);
                        }
                    }}
                    type="submit"
                    className={`rounded-md my-5 ${ShowJudgeForm ? `bg-red-600 hover:bg-red-500` : `bg-green-600 hover:bg-green-500`} px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                    {!ShowJudgeForm ? "Open" : "Close"} Register Judge Form
                </button>
            </div>


            {ShowLawyerForm &&
                <form
                    noValidate
                    onSubmit={handleSubmit((data) => {
                        // TODO: - Stracture lawyer Information then call The API with structured Lawyer Info
                        // Dispatch Create lawyer Here
                        const lawyerData = { ...data };
                        lawyerData.address = { streetAddress: lawyerData.streetAddress, city: lawyerData.city, homeState: lawyerData.homeState, pinCode: lawyerData.pinCode };
                        delete lawyerData.streetAddress;
                        delete lawyerData.city;
                        delete lawyerData.homeState;
                        delete lawyerData.pinCode;

                        // dispatch lawyerData to create a laayer
                        dispatch(createLawyerAsync(lawyerData))
                        console.log(lawyerData)
                    })}
                    className='w-2/3 bg-slate-100 p-10 m-auto rounded-xl shadow-2xl mb-10'>
                    <div className="space-y-12">
                        {/* personal Information  */}
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Lawyer's Personal Information</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="name" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Full Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            {...register("name", {
                                                required: "name is requred", pattern: {
                                                    value: /(?:(\w+-?\w+)) (?:(\w+))(?: (\w+))?$/g,
                                                    message: "Enter a valid Name"
                                                }
                                            })}
                                            type="text"
                                            placeholder='Enter Full Name'
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.name && <p className='text-red-500 text-left'>{errors.name.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="mobileNo" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Mobile Number
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
                                            placeholder='Enter Contact Number'
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                    {errors.mobileNo && <p className='text-red-500 text-left'>{errors.mobileNo.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            {...register("email", {
                                                required: "email is requred", pattern: {
                                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                    message: "Enter a valid Email"
                                                }
                                            })}
                                            type="email"
                                            placeholder='Enter Email'
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.email && <p className='text-red-500 text-left'>{errors.email.message}</p>}
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="streetAddress" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="streetAddress"
                                            {...register('streetAddress', { required: "street-address is required" })}
                                            type="text"
                                            placeholder='Enter Full Address'
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.streetAddress && <p className='text-red-500 text-left'>{errors.streetAddress.message}</p>}
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="city"
                                            {...register('city', { required: "City is required" })}
                                            type="text"
                                            placeholder='Enter City'
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.city && <p className='text-red-500 text-left'>{errors.city.message}</p>}
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="homeState" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="homeState"
                                            {...register('homeState', { required: "State Name is required" })}
                                            type="text"
                                            placeholder='Enter State Name'
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.homeState && <p className='text-red-500 text-left'>{errors.homeState.message}</p>}
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="pinCode" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pinCode"
                                            {...register('pinCode', { required: "PIN code is required" })}
                                            type="number"
                                            placeholder='Enter PIN'
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                    {errors.pinCode && <p className='text-red-500 text-left'>{errors.pinCode.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Professional Information</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="regNo" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Registration No(Bar Councile):
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="regNo"
                                            {...register('regNo', { required: "Reg No is required" })}
                                            type="text"
                                            placeholder='Enter Registration No'
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.regNo && <p className='text-red-500 text-left'>{errors.regNo.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="practiceCourt" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        Court Of Practice
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="practiceCourt"
                                            {...register('practiceCourt', { required: "court of practice is required" })} className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option>--Select--</option>
                                            <option>District Court</option>
                                            <option>High Court</option>
                                            <option>Supreme Court</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                    {errors.practiceCourt && <p className='text-red-500 text-left'>{errors.practiceCourt.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="PeferDomain" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        Prefered Domain
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="PeferDomain"
                                            {...register('PeferDomain', { required: "prefered Domain" })}
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option>--Select--</option>
                                            <option>Civil</option>
                                            <option>Criminal</option>
                                            <option>land</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                    {errors.PeferDomain && <p className='text-red-500 text-left'>{errors.PeferDomain.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="practiceCity" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        City Of Practice
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="practiceCity"
                                            {...register('practiceCity', { required: "City of practice is required" })}
                                            type="text"
                                            placeholder='Enter City Of Practice'
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.practiceCity && <p className='text-red-500 text-left'>{errors.practiceCity.message}</p>}
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="practiceYear" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Year Of Practice
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="practiceYear"
                                            {...register('practiceYear', { required: "Year of practice is required" })}
                                            type="number"
                                            placeholder='Enter Total Exprience(year)'
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.practiceYear && <p className='text-red-500 text-left'>{errors.practiceYear.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="password" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Password (temporary)
                                    </label>
                                    <div className="mt-2 flex">
                                        <input
                                            id="password"
                                            {...register("password",
                                                {
                                                    required: "password is requred",
                                                    pattern: {
                                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                                                        message: "- at least 8 characters \n - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n - Can contain special characters"
                                                    }
                                                })}
                                            placeholder="Password"
                                            type={type}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                        <span class="flex items-center -ml-10" onClick={handleToggle}>
                                            {icon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </span>
                                    </div>
                                    {errors.password && <p className='text-red-500 text-left'>{errors.password.message}</p>}
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            {...register('about', { required: "Required field" })}
                                            placeholder='Enter About the Lawyer It will show in the lawyer profile'
                                            rows={3}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about the lawyer.</p>
                                    {errors.about && <p className='text-red-500 text-left'>{errors.about.message}</p>}
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                        Profile photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="photo"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a Photo</span>
                                                    <input id="photo" {...register('photo', { required: "photo is required" })} type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    {errors.photo && <p className='text-red-500 text-left'>{errors.photo.message}</p>}
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Save & Cancel Button  */}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            }

            {ShowJudgeForm &&
                <form
                    noValidate
                    onSubmit={handleSubmit((data) => {
                        // TODO: - Stracture lawyer Information then call The API with structured Lawyer Info
                        // Dispatch Create lawyer Here
                        console.log(data)
                    })}
                    className='w-2/3 bg-slate-100 p-10 m-auto rounded-xl shadow-2xl mb-10'>
                    <div className="space-y-12">
                        {/* personal Information  */}
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Judge's Personal Information</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="name" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Full Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            {...register("name", {
                                                required: "name is requred", pattern: {
                                                    value: /(?:(\w+-?\w+)) (?:(\w+))(?: (\w+))?$/g,
                                                    message: "Enter a valid Name"
                                                }
                                            })}
                                            type="text"
                                            placeholder='Enter Full Name'
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.name && <p className='text-red-500 text-left'>{errors.name.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="mobileNo" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Mobile Number
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
                                            placeholder='Enter Contact Number'
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                    {errors.mobileNo && <p className='text-red-500 text-left'>{errors.mobileNo.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            {...register("email", {
                                                required: "email is requred", pattern: {
                                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                    message: "Enter a valid Email"
                                                }
                                            })}
                                            type="email"
                                            placeholder='Enter Email'
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.email && <p className='text-red-500 text-left'>{errors.email.message}</p>}
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="streetAddress" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="streetAddress"
                                            {...register('streetAddress', { required: "street-address is required" })}
                                            type="text"
                                            placeholder='Enter Full Address'
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.streetAddress && <p className='text-red-500 text-left'>{errors.streetAddress.message}</p>}
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="city"
                                            {...register('city', { required: "City is required" })}
                                            type="text"
                                            placeholder='Enter City'
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.city && <p className='text-red-500 text-left'>{errors.city.message}</p>}
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="homeState" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="homeState"
                                            {...register('homeState', { required: "State Name is required" })}
                                            type="text"
                                            placeholder='Enter State Name'
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.homeState && <p className='text-red-500 text-left'>{errors.homeState.message}</p>}
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="pinCode" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="pinCode"
                                            {...register('pinCode', { required: "PIN code is required" })}
                                            type="number"
                                            placeholder='Enter PIN'
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                    {errors.pinCode && <p className='text-red-500 text-left'>{errors.pinCode.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">Professional Information</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="regNo" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Registration No(Bar Councile):
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="regNo"
                                            {...register('regNo', { required: "Reg No is required" })}
                                            type="text"
                                            placeholder='Enter Registration No'
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.regNo && <p className='text-red-500 text-left'>{errors.regNo.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="practiceCourt" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        Court Of Practice
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="practiceCourt"
                                            {...register('practiceCourt', { required: "court of practice is required" })} className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option>--Select--</option>
                                            <option>District Court</option>
                                            <option>High Court</option>
                                            <option>Supreme Court</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                    {errors.practiceCourt && <p className='text-red-500 text-left'>{errors.practiceCourt.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="PeferDomain" className="justify-self-start block text-sm/6 font-medium text-gray-900">
                                        Prefered Domain
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="PeferDomain"
                                            {...register('PeferDomain', { required: "prefered Domain" })}
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option>--Select--</option>
                                            <option>Civil</option>
                                            <option>Criminal</option>
                                            <option>land</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                    {errors.PeferDomain && <p className='text-red-500 text-left'>{errors.PeferDomain.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="practiceCity" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        City Of Practice
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="practiceCity"
                                            {...register('practiceCity', { required: "City of practice is required" })}
                                            type="text"
                                            placeholder='Enter City Of Practice'
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.practiceCity && <p className='text-red-500 text-left'>{errors.practiceCity.message}</p>}
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="practiceYear" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Year Of Practice
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="practiceYear"
                                            {...register('practiceYear', { required: "Year of practice is required" })}
                                            type="number"
                                            placeholder='Enter Total Exprience(year)'
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    {errors.practiceYear && <p className='text-red-500 text-left'>{errors.practiceYear.message}</p>}
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="password" className="block justify-self-start text-sm/6 font-medium text-gray-900">
                                        Password (temporary)
                                    </label>
                                    <div className="mt-2 flex">
                                        <input
                                            id="password"
                                            {...register("password",
                                                {
                                                    required: "password is requred",
                                                    pattern: {
                                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                                                        message: "- at least 8 characters \n - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n - Can contain special characters"
                                                    }
                                                })}
                                            placeholder="Password"
                                            type={type}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                        <span class="flex items-center -ml-10" onClick={handleToggle}>
                                            {icon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </span>
                                    </div>
                                    {errors.password && <p className='text-red-500 text-left'>{errors.password.message}</p>}
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            {...register('about', { required: "Required field" })}
                                            placeholder='Enter About the Lawyer It will show in the lawyer profile'
                                            rows={3}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about the lawyer.</p>
                                    {errors.about && <p className='text-red-500 text-left'>{errors.about.message}</p>}
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                        Profile photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="photo"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a Photo</span>
                                                    <input id="photo" {...register('photo', { required: "photo is required" })} type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    {errors.photo && <p className='text-red-500 text-left'>{errors.photo.message}</p>}
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Save & Cancel Button  */}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            }
        </div>
    )
}
