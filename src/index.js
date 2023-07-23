import saudacao from './saudacao.js';
import Title from './components/title/title.js';
import Image from './components/image/image.js';
import Button from './components/button/button.js';

const title = new Title();
const image = new Image();
const button = new Button();

title.create('Primeira página');
image.insertImage();
button.create();

// Babel spread.
const obj = {a: 1, b: 2, c: 3};
let {a, b, ...teste} = obj;

// console.log('Hello webpack');
// saudacao('jacks');