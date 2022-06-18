import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from '../components/Popup';

export default class PopupRenderer {
    constructor(element: Element) {
        const root = ReactDOM.createRoot(element);
        root.render(<Popup/>);
    }
}