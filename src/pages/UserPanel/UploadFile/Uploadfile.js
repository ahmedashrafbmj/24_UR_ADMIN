import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Upload from '../../../components/UploadFile/UploadFile'

const Dashboard = () => {
    return (
        <>
            <Header />
            <Upload Role="User"  />
            {/* <Footer /> */}
        </>
    )
}

export default Dashboard