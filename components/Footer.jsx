import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className='fixed bottom-0 w-full h-[100px] bg-blue-700'>
                <div className='flex w-[70%] m-auto'>
                    <div className='flex mr-[15%]'>
                        <span className='text-3xl font-medium'>Pages</span>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <span className='text-3xl font-medium'>Info</span>
                        <p>Privacy policy</p>
                        <p>Terms of service</p>
                    </div>
                </div>
            </div>
        )
    }
}