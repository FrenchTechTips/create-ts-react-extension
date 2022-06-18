import React from 'react';
import {Component} from 'react';

export default class Footer extends Component {
    render() {
        return <div className=' ' >
            <div className='flex justify-center p-5 '>
                <img src="assets/icons/ytb.png" className="w-10 h-10 mx-4" alt="Youtube" />
                <img src="assets/icons/bmac2.png" className="w-10 h-10 mx-4" alt="Bmac" />
                <img src="assets/icons/github.png" className="w-10 h-10 mx-4" alt="Github" />
            </div>
            <div className='flex justify-center'>
                <p className='select-none '>Created by <strong>Hokanosekai</strong> & <strong>FTT</strong></p>
            </div>
        </div>;
    }
}