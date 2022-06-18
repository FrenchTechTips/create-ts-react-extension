import React from 'react';
import ReactDOM from 'react-dom/client';
import Options from '../components/options/Options';
import store from '../redux/store';
import {Provider} from 'react-redux';

export default class OptionsRenderer {
    constructor(element: Element) {
        const root = ReactDOM.createRoot(element);
        root.render(
            <Provider store={store} >
                <Options />
            </Provider>
        );
    }
}