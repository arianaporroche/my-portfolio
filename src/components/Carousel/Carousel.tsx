import React from 'react';
import './Carousel.css';

interface CarouselProps {
    images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const loopImages = [...images, ...images];

    return (
        <div className="carousel-container">
            <div className="carousel-stage">
                <div className="carousel-track">
                    {loopImages.map((src, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={src} alt={`Proyecto ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
