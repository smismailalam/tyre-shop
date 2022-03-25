import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Home() {
    const slideImages = [
        {
          url: 'http://react-responsive-carousel.js.org/assets/1.jpeg',
          caption: 'Legend 1'
        },
        {
          url: 'http://react-responsive-carousel.js.org/assets/2.jpeg',
          caption: 'Legend 2'
        },
        {
          url: 'http://react-responsive-carousel.js.org/assets/3.jpeg',
          caption: 'Legend 3'
        },
    ];
  return (
    <Carousel>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
                <img src={slideImage.url} />
                <p className="legend">{slideImage.caption}</p>
            </div>
        ))} 
    </Carousel>
  );
}

export default Home;