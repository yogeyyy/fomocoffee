import React from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import testimonials from "./testimonialdata";

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
    <Container>
      <InnerContainer>
        <TestimonialsHeader>
          <p>Testimonials</p>
          <h1>Kya scene h?</h1>
        </TestimonialsHeader>
        <TestimonialsRow>
          {testimonials.map(createTestimonialCard)}
        </TestimonialsRow>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  min-height: 100%;
  position: relative;
  background-color: white;
`;

const InnerContainer = styled.div`
  max-width: 76%;
  min-height: 100%;
  margin: auto;
  text-align: center;
  padding-top: 4rem;
`;

const TestimonialsHeader = styled.div`
  p {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.25rem;

    color: #432f1a;
  }

  h1 {
    font-family: "Anton";
    font-style: normal;
    font-weight: 400;
    font-size: 7rem;
    line-height: 8rem;

    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 4rem;

    color: #7f5837;
  }
`;

const TestimonialsRow = styled.div`
display: flex;
  padding-bottom: 4rem;
`;

export default Testimonials;
