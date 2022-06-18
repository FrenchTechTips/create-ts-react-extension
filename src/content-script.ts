document.body.style.border = '5px solid red';
console.log('[content.js][INFO] ContentScript Loaded');

// Fetch message from local extension storage then alert it
// @ts-ignore
const storage = browser.storage.local;
storage.get('options', (res) => {
    alert(res.options.message);
});

/**
 * Handle a response
 *
 * @param message
 */
function handleResponse(message) {
    console.log(`[content.js][INFO] ${message}`);
}

/**
 * Handle an error and log it
 *
 * @param error
 */
function handleError(error) {
    console.log(`[content.js][ERROR] ${error}`);
}

/**
 * AutoCall function to send message in the runtime then handle the response
 */
(() => {
  // @ts-ignore
  const sendMessage = browser.runtime.sendMessage({id: 'content_default_response',
    message: 'Message send by the content script'
  });
  sendMessage.then(handleResponse, handleError);
})();
