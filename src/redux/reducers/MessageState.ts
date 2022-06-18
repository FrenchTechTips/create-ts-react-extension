/* eslint-disable quotes */
import {Action, ActionsTypes} from '../ActionsTypes';
var browser = require('webextension-polyfill');

var storage = browser.storage.local; 

const initialState: MessageStateType = {
    message: 'Waiting for options to change... ',
};

export interface MessageStateType {
    message: string,
}

export default (state: MessageStateType , action: Action) => {
    switch (action.type) {
        case ActionsTypes.UPDATE_MESSAGE: {
            
            return state = action.payload;
        }
        case ActionsTypes.GET_MESSAGE: {
                return{...state};
        }
        case ActionsTypes.GET_MESSAGE_SUCCESS: {
            
            return state = action.payload;
        }

        case ActionsTypes.GET_MESSAGE_NO_DATA: {
            storage.set({'options': initialState});
            return state = initialState;
        }
        default:{
            
            return initialState;
        };

        }
    };
