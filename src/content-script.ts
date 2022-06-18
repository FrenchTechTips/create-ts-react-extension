/* eslint-disable quotes */



document.body.style.border = '5px solid red';
let hoverBox = document.createElement('div');
hoverBox.innerHTML = 'jieorzjfoierhgjiouerjgierjgiergjer';

document.body.append(hoverBox);

// @ts-ignore
var storage = browser.storage.local; 
storage.get('options', (res) => {
    alert(res.options.message);
});


function handleResponse(message) {
    console.log(`Message from the background script:  ${message.response}`);
  }
  
  function handleError(error) {
    console.log(`Error: ${error}`);
  }
  
  function notifyBackgroundPage() {
    // @ts-ignore
    var sendMessage = browser.runtime.sendMessage({id: 'content_default_response',
      message: "Greeting from the content script"
    });
    sendMessage.then(handleResponse, handleError);
  }

  notifyBackgroundPage();
