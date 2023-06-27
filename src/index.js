import Photo from './img/img1.jpg';
import './components/main.scss';


function addImage(img) {
    const image = document.createElement("img");
    image.src = img;
    document.body.appendChild(image)
}

addImage(Photo)

console.log("kurwa mam dość już nie chce");
