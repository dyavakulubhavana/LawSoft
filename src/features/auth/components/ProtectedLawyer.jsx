import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInLawyer } from '../authSlice'
import { Navigate } from 'react-router-dom';

export const ProtectedLawyer = ({ children }) => {
    const lawyer = useSelector(selectLoggedInLawyer);

    if (!lawyer) {
        return <Navigate to={"/"} replace={true}></Navigate>
    }
    return children;
}
