import './style.scss';

import Canvas from './canvas/Canvas.js';
import Spinner from './spinner/Spinner.js';

// Create Canvas
const canvas = new Canvas(document.getElementById('canvas'), true);
// Create spinner (Every component need canvas !)
const spinner = new Spinner(canvas);
// Add spinner to canvas
canvas.addComponent(spinner);
// Component can be removed
//canvas.removeComponent(spinner);
// canvas can be unmount
setTimeout(() => {
    canvas.unmount();
}, 1000)
setTimeout(() => {
    // and mount again
    canvas.mount();
}, 2000)
