import React from 'react'
import ClientNavbar from '../features/navbar/ClientNavbar'
import { DocumentSubmission } from '../features/documentSubmission/DocumentSubmission'

export const DocumentSubmissionPage = () => {
    return (
        <>
            <ClientNavbar></ClientNavbar>
            <div className='p-8 bg-slate-50'>
                <DocumentSubmission></DocumentSubmission>
            </div>
        </>
    )
}
