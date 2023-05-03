import React from 'react'
// import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Dashboardecommerce from '../../../components/dashboard/dashboardecommerce'
import SelectMultiPrediction from '../../../components/SelectPrediction/SelectMultiPrediction'

const Dashboard = () => {
    return (
        <>
            <Header />
            <Dashboardecommerce Role="User"  />
            <SelectMultiPrediction />
            {/* <Footer /> */}
        </>
    )
}

export default Dashboard