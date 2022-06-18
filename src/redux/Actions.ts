import {MessageStateType} from './reducers/MessageState';
import {ActionsTypes} from './ActionsTypes';
var browser = require('webextension-polyfill');



export const dataConfig = () => {

    return (dispatch) =>{
        dispatch(getUsersRequest());
        browser.storage.local.get('options', res => {
            if(Object.keys(res).length === 0 ){
                dispatch(getUsersNoData());
            }
            dispatch(getUsersSuccess(res.options));
        });
    };
};

    
    const getUsersRequest = () => {
        return {
          type: ActionsTypes.GET_MESSAGE,
        };
      };
      
      const getUsersSuccess = (payload: MessageStateType) => {
        return {
          type: ActionsTypes.GET_MESSAGE_SUCCESS,
          payload,
        };
      };
      

      const getUsersNoData = () =>{
          return{
            type: ActionsTypes.GET_MESSAGE_NO_DATA,
            
          } ;

      };

export const updateMessage = (payload: MessageStateType) => ({
    type: ActionsTypes.UPDATE_MESSAGE,
    payload
});

export const getMessage = () => ({
    type: ActionsTypes.GET_MESSAGE,
    
});
