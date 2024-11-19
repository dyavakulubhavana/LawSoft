import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  height: '331px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const slideImages = [
  {
    url: img1,
    caption: 'Slide 1'
  },
  {
    url: img2,
    caption: 'Slide 2'
  },
  {
    url: img3,
    caption: 'Slide 3'
  },
  {
    url: img4,
    caption: 'Slide 3'
  },
  {
    url: img5,
    caption: 'Slide 3'
  }
];

export const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}