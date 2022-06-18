import {MessageStateType} from './reducers/MessageState';
import {ActionsTypes} from './ActionsTypes';
var browser = require('webextension-polyfill');

export const dataConfig = () => {
    return (dispatch) =>{
        dispatch(getDataRequest());
        browser.storage.local.get('options', res => {
            if(Object.keys(res).length === 0 ) dispatch(getDataNoData());
            dispatch(getDataSuccess(res.options));
        });
    };
};

const getDataRequest = () => ({
    type: ActionsTypes.GET_MESSAGE,
});
      
const getDataSuccess = (payload: MessageStateType) => ({
    type: ActionsTypes.GET_MESSAGE_SUCCESS,
    payload,
});

const getDataNoData = () => ({
    type: ActionsTypes.GET_MESSAGE_NO_DATA,
});

export const updateMessage = (payload: MessageStateType) => ({
    type: ActionsTypes.UPDATE_MESSAGE,
    payload
});
