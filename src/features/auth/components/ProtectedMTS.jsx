import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInMTS } from '../authSlice'
import { Navigate } from 'react-router-dom';

export const ProtectedMTS = ({children}) => {
    const MTS = useSelector(selectLoggedInMTS);

    if (!MTS) {
        return <Navigate to={"/"} replace={true}></Navigate>
    }
    return children;
}
