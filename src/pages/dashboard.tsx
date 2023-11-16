'use client'
import React, { ReactElement, useState } from 'react'
import AuthMiddleware from '@/middlewares/auth/AuthMiddleware'
import Header from '@/components/Header'
import Navbar from "../components/Navbar"
import Transaction from '@/components/form/Transaction'
import WagmiWrapperLayout from '@/layouts/Wagmi'

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
    return (
        <>
            <Navbar />
            <div className=' md:px-2 sm:px-2 max-sm:px-2 '>
                {/* <Header /> */}
                <Transaction />
            </div>
        </>
    )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthMiddleware>
            {page}
        </AuthMiddleware>
    )
}

export default Dashboard