import React from 'react'
import './index.scss'
import Footer from './components/Footer'
import Menu from './components/Menu'

const Layout = ({ children }) => {
    return (
        <div className='layout_container'>
            <div className='layout_wrapper'>
                <div className='layout_header'><Menu /></div>
                <div className='layout_body'>{children}</div>
                <div className='layout_footer'><Footer /></div>
            </div>
        </div>
    )
}

export default Layout