import hobbit from '../../img/hobbit.jpg';

class Image {
    insertImage() {
        const img = document.createElement('img');

        img.src = hobbit;
        img.width = 200;

        document.querySelector('body').appendChild(img);
    }
}

export default Image;
