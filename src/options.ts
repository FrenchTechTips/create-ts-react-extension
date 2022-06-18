// Set all of the toggle options to the correct option
import OptionsRenderer from './render/OptionsRenderer';
window.addEventListener('DOMContentLoaded', init);

async function init() {
    const optionsContainer = document.getElementById('options');
// @ts-ignore
    const optionsElements = optionsContainer.querySelectorAll('*');

    for (const optionsElement of optionsElements) {
        switch (optionsElement.getAttribute('data-type')) {
            case 'react': {
                new OptionsRenderer(optionsElement);
                break;
            }
        }
    }
}

