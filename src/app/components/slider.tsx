import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
interface ResponsiveCarouselProps {
  files: string[]; // Tableau de noms d'images il doit respecte backend
}

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({ files }) => {
  return (
    <Carousel>
      {files?.map((imageName, index) => (
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            src={`http://localhost:3000/file/${imageName}`} // Utilise la route pour récupérer l'image
            alt={`Image ${index + 1}`}
            layout="responsive" // Pour un comportement réactif
            width={200} // Spécifiez une largeur
            height={200} // Spécifiez une hauteur
          />
          <Carousel.Caption>
            <h3>Image {index + 1}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
