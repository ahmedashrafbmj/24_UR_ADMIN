import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import UserComp from '../../../components/adduser/Adduser'

const AddUser = () => {
    return (
        <>
            <Header />
            <UserComp Role="Subadmin" />
            {/* <Footer /> */}
        </>
    )
}

export default AddUser