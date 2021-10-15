import './style.scss';

import Canvas from './canvas/Canvas.js';
import Spinner from './spinner/Spinner.js';

const canvas = new Canvas(document.getElementById('canvas'), true);

const spinner = new Spinner(canvas);
canvas.addComponent(spinner);
//canvas.removeComponent(spinner);
//canvas.unmount();