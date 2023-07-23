import Title from './components/title/title.js';
import Image from './components/image/image.js';
import Button from './components/button/button.js';
import warning from './templates/warning.html';
import fraseTxt from './files/frase.txt';
import descriptionJson from './files/description.json';
import './styles/warning.css';

const title = new Title();
const image = new Image();
const button = new Button();

title.create('Primeira página');
image.insertImage();
button.create();

// Import de HTML.
const body = document.querySelector('body');
body.innerHTML += warning;

// Import arquivo de texto.
console.log(fraseTxt, descriptionJson);

// Babel spread.
    // const obj = {a: 1, b: 2, c: 3};
    // let {a, b, ...teste} = obj;

// console.log('Hello webpack');