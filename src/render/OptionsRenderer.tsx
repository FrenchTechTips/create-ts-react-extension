import React from 'react';
import ReactDOM from 'react-dom/client';

export default class OptionsRenderer {
    constructor(element: Element) {
        
        const root = ReactDOM.createRoot(element);
        root.render(<h1>Hello options!</h1>);
    }
}