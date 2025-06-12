import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <div id="page" className="s-pagewrap ss-home">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout