import React from 'react'
import './index.scss'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Gutter from '../Components/Gutter'

const Layout = ({ children }) => {
    return (
        <div className='layout_container'>
            <div className='layout_wrapper'>
                <Gutter>
                    <div className='layout_header'><Menu /></div>
                    <div className='layout_body'>{children}</div>
                    <div className='layout_footer'><Footer /></div>
                </Gutter>
                
            </div>
        </div>
    )
}

export default Layout