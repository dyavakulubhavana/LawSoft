import React from 'react'
import ClientNavbar from '../features/navbar/ClientNavbar'
import { PetitionFiling } from '../features/petitionFiling/PetitionFiling'

export const PetitionFilingPage = () => {
    return (
        <>
            <ClientNavbar></ClientNavbar>
            <div className='p-8 bg-slate-100'>
                <PetitionFiling></PetitionFiling>
            </div>
        </>
    )
}
