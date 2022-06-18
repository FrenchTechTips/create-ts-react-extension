import {MessageType} from '../types';
import browser from 'webextension-polyfill';

export default class Utils {
    static sendMessage(message){
        browser.runtime.sendMessage(message);
    };
}