import React, { PropsWithChildren } from 'react'
import HeaderPublic from '../components/HeaderPublic'
import Footer from '../components/Footer'
import './style.css'; // Importe o arquivo de estilo CSS

const PublicLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="gradient-background">
        <HeaderPublic />
        <div className='md:px-24'>
            {children}
        </div>
        <Footer />
    </div>
    
    )
}

export default PublicLayout
