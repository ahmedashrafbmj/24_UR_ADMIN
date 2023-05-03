import React from 'react'
// import ProfileC from '../../components/Profile/Profile'
import ProfileC from '../../../components/Profile/Profile'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

const Profile = () => {
  return (
    <div>
      <Header />
      <ProfileC Role="SuperAdmin" />
      <Footer />
    </div>
  )
}

export default Profile