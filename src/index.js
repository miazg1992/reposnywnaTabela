import Photo from './assets/img1.jpg';
import './components/main.scss';


function addImage(img) {
    const image = document.createElement("img");
    image.src = img;
    document.body.appendChild(image)
}

addImage(Photo)

