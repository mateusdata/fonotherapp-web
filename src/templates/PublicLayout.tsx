import React, { PropsWithChildren } from 'react'
import HeaderPublic from '../components/HeaderPublic'
import Footer from '../components/Footer'
import './style.css'; 

const PublicLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="">
        <HeaderPublic />
        <div className='md:px-24'>
            {children}
        </div>
        <Footer />
    </div>
    
    )
}

export default PublicLayout
