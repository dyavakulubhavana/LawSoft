import React from 'react'
import { MtsDashboard } from '../features/MTS/components/MtsDashboard'
import MtsNavbar from '../features/navbar/MtsNavbar'

export const MtsHomePage = () => {
  return (
    <div>
        <MtsNavbar></MtsNavbar>
        <MtsDashboard></MtsDashboard>
    </div>
  )
}
