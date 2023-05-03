import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Dashboardecommerce from '../../../components/dashboard/dashboardecommerce'

const Dashboard = () => {
    return (
        <>
            <Header />
            {/* <Dashboardecommerce Role="Admin" textToCopy="www.google.com"  /> */}
            <Dashboardecommerce Role="Admin"  />

            {/* <Footer /> */}
        </>
    )
}

export default Dashboard