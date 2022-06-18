import {MessageStateType} from './reducers/MessageState';

export enum ActionsTypes {
    UPDATE_MESSAGE = 'UPDATE_MESSAGE',
    GET_MESSAGE = 'GET_MESSAGE',
    GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS',
    GET_MESSAGE_NO_DATA ='GET_MESSAGE_NO_DATA'
}

interface GetLocalStorageNoData {
    type: ActionsTypes.GET_MESSAGE_NO_DATA,
}

interface GetLocalStorage {
    type: ActionsTypes.GET_MESSAGE,
}

interface GetLocalStorageSuccess {
    type: ActionsTypes.GET_MESSAGE_SUCCESS,
    payload: MessageStateType,
}

interface UpdateMessageAction {
    type: ActionsTypes.UPDATE_MESSAGE,
    payload: MessageStateType
}

export type Action = UpdateMessageAction | GetLocalStorage | GetLocalStorageSuccess  | GetLocalStorageNoData;