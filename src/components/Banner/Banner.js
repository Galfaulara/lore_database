import React, {useState} from 'react';
import { SliderData } from './SliderData';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './Banner.css'

const  Banner = ( {slides} ) => {
 
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === 4 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 4 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaChevronLeft className='left-arrow' onClick={prevSlide} />
      <FaChevronRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
    }


export default Banner





