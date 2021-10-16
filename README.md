# 🚀 Library with front-end component!
```
npm run build
```

or

```
yarn build
```

to bundle your application

>Library uses canvas and can be initialized with:
```javascript
import Canvas from './canvas/Canvas.js';
// Create Canvas
const canvas = new Canvas(document.getElementById('canvas'), true);
```
Spinner Component:

![image](https://github.com/georgechem/front-components-library/blob/main/spinnerComponent.png)

Exemplary component can be used:
```javascript
import Spinner from './spinner/Spinner.js';
// Create spinner (Every component need canvas !)
const spinner = new Spinner(canvas);
```
Instance of previously created canvas is needed in every created component!
Next we add component to canvas
```javascript
// Add spinner to canvas
canvas.addComponent(spinner);
```
Since now component is added and drawn on the canvas. Every component need to implement draw method
```javascript
draw = () => {
    // Neede for canvas to draw component on the screen
    // Here you can invoke other methods neded by your component
}
```
To remove component from canvas use:
```javascript
// Component can be removed
canvas.removeComponent(spinner);
```

