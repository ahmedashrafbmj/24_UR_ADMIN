import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Dashboardecommerce from '../../../components/dashboard/dashboardecommerce'

const Dashboard = () => {
    return (
        <>
            <Header />
            <Dashboardecommerce Role="Subadmin"  />
            {/* <Footer /> */}
        </>
    )
}

export default Dashboard