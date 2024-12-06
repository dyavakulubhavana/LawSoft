import React from 'react';
import ClientNavbar from '../features/navbar/ClientNavbar';
import { Footer } from '../features/footer/Footer';
import { CardFeature } from '../features/card/CardFeature';
import CalendarComponent from '../features/calender/CalenderComponent';
import { Link } from 'react-router-dom';


const navigation = [
  { iconName: 'user', title: 'Search Lawyer', bgcolor: 'bg-red-400', link: '/searchlawyer'},
  { iconName: 'file', title: 'Petition Filing', bgcolor: 'bg-orange-400', link: '/petitionfiling'},
  { iconName: 'document', title: 'Submit Document', bgcolor: 'bg-yellow-400', link: '/submit-document'},
  { iconName: 'libary', title: 'Case Libary', bgcolor: 'bg-pink-400', link: 'searchlawyer'},
]


export const ClientDashboard = () => {

  return (
    <>
      <ClientNavbar></ClientNavbar>
      <div className='p-20 flex gap-8 justify-evenly bg-slate-200'>

        {navigation.map((item) => (
          <Link to={item.link}>
            <CardFeature iconName={item.iconName} title={item.title} bgcolor={item.bgcolor}></CardFeature>
          </Link>
        ))}

      </div>

      <div className='bg-slate-200 px-20 py-7 flex justify-evenly'>
        <CalendarComponent></CalendarComponent>
        <div className='w-6/12 bg-red-50 border border-black p-2 shadow-xl rounded-md'>
          <h1 className='font-bold'>Present Case History</h1>
          <ul className='list-disc list-inside mt-10 text-left ml-8 '>
            <li>THE STATE OF WEST BENGAL AND ORS. VS SRI SUKHDEB MAITY AND ORS <a className='text-blue-600 underline cursor-pointer'>Link</a> </li>
            <li> from serial no. 107 & 108 and then from
              serial no. 52 <a className='text-blue-600 underline cursor-pointer'>Link</a> </li>
            <li>Notice of the court about case no - 5026 <a className='text-blue-600 underline cursor-pointer'>Link</a> </li>
            <li>Most recent activity of document submission <a className='text-blue-600 underline cursor-pointer'>Link</a> </li>
          </ul>
        </div>
      </div>


      <Footer></Footer>
    </>
  )
}
