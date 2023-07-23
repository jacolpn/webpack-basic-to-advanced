import saudacao from './saudacao.js';
import Title from './components/title/title.js';
import Image from './components/image/image.js';

const title = new Title();
const image = new Image();

title.create('Primeira página');
image.insertImage();

// console.log('Hello webpack');
// saudacao('jacks');