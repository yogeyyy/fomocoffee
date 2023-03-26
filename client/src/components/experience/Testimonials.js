import React from 'react'
import './testimonials.css'
import Testimonial from './Testimonial'
import testimonials from './testimonialdata'

function createTestimonialCard(testimonial) {
  return (
    <Testimonial 
      key={testimonial.id}
      content={testimonial.content}
      img={testimonial.img}
      authorName={testimonial.authorName}
      authorPosition={testimonial.authorPosition}
      authorOffice={testimonial.authorOffice}
    />
  );
}

function Testimonials() {
  return (
    <div className='testimonials' id="testimonialSection">
        <div className='testimonialsArea'>
        <div className='testimonialsHeader'>
            <p className='testimonialsTitle'>Testimonials</p>
            <h1 className='testimonialsHeading'>Kya Scene h?</h1>
        </div>
        <div className='testimonialsRow'>
          {testimonials.map(createTestimonialCard)}
        </div>

        </div>
    </div>
  )
}

export default Testimonials