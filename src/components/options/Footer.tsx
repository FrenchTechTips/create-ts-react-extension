import React from 'react';
import {Component} from 'react';

export default class Footer extends Component {
    render() {
        return <div className='' >
            <div className='flex justify-center p-5 '>
                <a href="https://www.youtube.com/channel/UCRhOagTo4SJGefI5AAMXwww" target="_blank" rel="noreferrer"><img src="../assets/icons/ytb.png" className="w-10 h-10 mx-4" alt="Youtube" /></a>
                <a href="https://github.com/FrenchTechTips/create-react-extension.git" target="_blank" rel="noreferrer"><img src="../assets/icons/github.png" className="w-10 h-10 mx-4" alt="Github" /></a>
            </div>
            <div className='flex justify-center'>
                <p className='select-none '>Created by <strong>Hokanosekai</strong> & <strong>FTT</strong></p>
            </div>
        </div>;
    }
}