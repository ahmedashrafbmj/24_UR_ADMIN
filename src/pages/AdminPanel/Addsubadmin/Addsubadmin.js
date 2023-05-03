import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Subadmin from '../../../components/addsubadmin/Addsubadmin'

const Addsubadmin = () => {
    return (
        <>
            <Header />
            <Subadmin Role="Superadmin" />
            {/* <Footer /> */}
        </>
    )
}

export default Addsubadmin