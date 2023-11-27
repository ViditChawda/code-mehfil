import React from 'react'
import { X } from 'lucide-react'

function Hamburger({ isSideNavOpen, setSideNavOpen }: { isSideNavOpen: boolean, setSideNavOpen: Function }) {

    return (
        <div className=' bg-primary border-4 border-tertiary rounded-full '>
            {isSideNavOpen ?
                <div onClick={() => setSideNavOpen(false)} className='flex flex-col gap-1 w-12 p-3'>
                    <X color="#C8C8C8" strokeWidth={3} />
                </div> :
                <div onClick={() => setSideNavOpen(true)} className='flex flex-col gap-1 w-12 p-3'>
                    <div className='h-1 bg-secondary'></div>
                    <div className='h-1 bg-secondary'></div>
                    <div className='h-1 bg-secondary'></div>
                </div>

            }
        </div>
    )
}

export default Hamburger