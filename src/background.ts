/* eslint-disable quotes */
import { MessageSendersID } from "./types";

var browser = require('webextension-polyfill');
console.log('Loaded');

let currentTab = null;

// Monitor for current User tab
browser.tabs.onActivated.addListener((event) => currentTab = event.tabId);



function handleMessage(request, sender, sendResponse) {
    switch(request.id){
        case MessageSendersID.POPUP_BUTTON: {
            browser.tabs.executeScript(currentTab, {file: './js/content.js'});
        }
        case MessageSendersID.CONTENT_DEFAULT_RESPONSE: {

            sendResponse({response: 'Response from background script'});
        }
    }
}

browser.runtime.onMessage.addListener(handleMessage);

