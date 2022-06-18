import { MessageSendersID } from './types';
var browser = require('webextension-polyfill');

console.log('[background.js][INFO] BackgroundScript Loaded');

let currentTab = null;

// Monitor for current User tab
browser.tabs.onActivated.addListener((event) => currentTab = event.tabId);

/**
 * Handle messages from runtime
 *
 * @param request
 * @param sender
 * @param sendResponse
 */
function handleMessage(request, sender, sendResponse) {
    console.log(`[background.js][INFO] ${request}`);
    switch(request.id){
        case MessageSendersID.POPUP_BUTTON: {
            // On click button in Popup load ContentScript on tab
            browser.tabs.executeScript(currentTab, {file: './js/content.js'});
            break;
        }
        case MessageSendersID.CONTENT_DEFAULT_RESPONSE: {
            // On ContentScript message send response to caller
            sendResponse('Message from the background');
            break;
        }
    }
}

// Listen runtime messages
browser.runtime.onMessage.addListener(handleMessage);
