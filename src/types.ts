/* eslint-disable semi */

export interface MessageType {
    id: MessageSendersID,
    message: string,
}


export enum MessageSendersID {
    POPUP_BUTTON = 'popup_button',
    POPUP_OPTIONS = 'popup_options',

    CONTENT_DEFAULT_RESPONSE = 'content_default_response',

    BACKGROUND_SEND_MESSAGE = 'background_send_message'
}