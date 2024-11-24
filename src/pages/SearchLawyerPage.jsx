import React from 'react'
import { SearchLawyer } from '../features/SearchLawyer/SearchLawyer'
import ClientNavbar from '../features/navbar/ClientNavbar'

export const SearchLawyerPage = () => {
  return (
    <div>
        <ClientNavbar></ClientNavbar>
        <SearchLawyer></SearchLawyer>
    </div>
  )
}
