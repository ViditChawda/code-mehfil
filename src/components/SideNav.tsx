import React from 'react'
import { useNavigate } from 'react-router-dom'

function SideNav({ isSideNavOpen, setSideNavOpen }: { isSideNavOpen: boolean, setSideNavOpen: Function }) {
    const navigate = useNavigate();

    return (
        <div className='h-screen w-full bg-primary md:hidden fixed border-4 border-secondary top-0 p-8'>
            <div className='flex flex-col text-secondary gap-8 mt-40 text-5xl'>
                <p onClick={() => navigate('/about-us')} className='cursor-pointer'>ABOUT US</p>
                <p onClick={() => navigate('/contact-us')} className='cursor-pointer'>CONTACT</p>
                <p onClick={() => navigate('/events')} className='cursor-pointer'>EVENTS</p>
            </div>
        </div>
    )
}

export default SideNav