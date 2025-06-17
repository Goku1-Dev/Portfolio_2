import React from 'react'
import './index.scss'
import Body from '../Pages/Home/Body'
import Header from '../Pages/Home/Header'
import Footer from '../Pages/Home/Footer'

const Layout = () => {
    return (
        <div className='layout_container'>
            <div className='layout_wrapper'>
                <div className='layout_header'><Header /></div>
                <div className='layout_body'><Body /></div>
                <div className='layout_footer'><Footer /></div>
            </div>
        </div>
    )
}

export default Layout