import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className='h-[50px] w-[100%] bg-red-400'>
                <div>
                    <a href='/' className='ml-[5%] mr-[5%]'>Home</a>
                    <a href='/About' className='mr-[5%]'>About</a>
                    <a href='/Contact'>Contact</a>
                </div>
            </div>
        )
    }
}