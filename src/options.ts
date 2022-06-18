import OptionsRenderer from './render/OptionsRenderer';

// On DOMContentLoaded render Option Component
window.addEventListener('DOMContentLoaded', (e) => {
    new OptionsRenderer(document.getElementById('options'));
});
