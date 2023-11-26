import React from 'react'

function Landing() {
    return (
        <div className='bg-primary h-screen flex flex-col md:gap-8 md:flex-row py-8 md:px-8 md:py-16 w-full'>
            <div className='text-secondary text-5xl flex justify-center md:w-[20%]'>
                {` </ Code `}<br />{` Mehfil />`}
            </div>
            <div className='flex items-end h-full cursor-pointer'>
                <div className='bg-tertiary rounded w-[330px] h-[420px] m-auto md:m-0 flex flex-col mt-16 transition-transform duration-200 ease-in-out transform md:hover:scale-105'>
                    <div className='text-5xl text-center font-semibold tracking-[10px]'>NOW</div>
                    <div className='bg-primary rounded-s w-[96%] h-[70%] mx-auto text-secondary text-[150px] mt-2 flex items-center justify-center'>
                        JS.
                    </div>
                    <div className='flex flex-col text-base font-medium items-center justify-center mt-2'>
                        <p>Daily Time: 10:00 AM - 12:00 AM</p>
                        <p>Date: 22 Nov - 2 Dec</p>
                    </div>
                </div>

            </div>
            <div className='text-secondary hidden md:block w-full ml-24 justify-evenly'>
                <div className='flex flex-row gap-24 items-center justify-center text-5xl'>
                    <p className='cursor-pointer'>ABOUT US</p>
                    <p className='cursor-pointer'>CONTACT</p>
                    <p className='cursor-pointer'>EVENTS</p>
                </div>
                <div className='text-8xl flex flex-col mt-20'>
                    <p>EVENTS & </p>
                    <p>SESSIONS</p>
                </div>
                <div className='h-3 bg-secondary rounded-s mt-10'></div>
                <div className='font-sans text-4xl font-semibold mt-20'>
                    Uniting tech enthusiasts through diverse and exciting events. Join the conversation, share knowledge, and elevate your coding journey!
                </div>
            </div>
            <div className='bg-primary md:hidden px-10'>
                <div className='text-5xl text-secondary text-center flex flex-col mt-20'>
                    <p>EVENTS & SESSIONS</p>
                </div>
                <div className='h-1 bg-secondary rounded-s mt-2'></div>
                <div className='font-sans text-2xl text-center text-secondary font-semibold mt-20 mb-20'>
                    Uniting tech enthusiasts through diverse and exciting events. Join the conversation, share knowledge, and elevate your coding journey!
                </div>
            </div>
        </div>
    )
}

export default Landing