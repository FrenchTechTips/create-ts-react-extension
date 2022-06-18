import React from 'react';
import {Component} from 'react';
import Footer from './popup/Footer';
import Header from './popup/Header';
import store from '../redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

export default class Popup extends Component {
    render() {
        return (
            <Provider store={store} >
                <BrowserRouter>
                    <div className="text-white w-full-popup">
                        <Header />
                        <div className="p-4 bg-gray-800">
                            <Footer/>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}