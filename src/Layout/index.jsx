import React from 'react'
import './index.scss'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Gutter from '../Components/Gutter'

const Layout = ({ children }) => {
    return (
        <div className='layout_container'>
            <div className='layout_wrapper'>
                <div className="relative h-full w-full bg-slate-950">
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0"
                        style={{
                            backgroundImage: `linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
                                            linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)`,
                            backgroundSize: '6.5rem 5rem',
                            backgroundRepeat: 'repeat',
                        }}
                    >
                        <Gutter>
                            <div className='layout_header'><Menu /></div>
                            <div className='layout_body'>{children}</div>
                            <div className='layout_footer'><Footer /></div>
                        </Gutter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout