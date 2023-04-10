import React from "react";
import styled from "styled-components";

function Testimonial(props) {
  return (
    <Container>
      <p>{props.content}</p>
      <TestimonialAuthor>
        <img src={props.img} alt="author" />
        <AuthorDetails>
          <h3>{props.authorName}</h3>
          <p>{props.authorPosition}</p>
          <p>@{props.authorOffice}</p>
        </AuthorDetails>
      </TestimonialAuthor>
    </Container>
  );
}

const Container = styled.div`
  width: 33.33%;
  padding: 1rem;

  &:nth-child(2) {
    border: 0.3rem solid #7f5837;
  }

  p {
  }
  font-family: "Spline Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.2rem;
  text-align: justify;

  color: #000000;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  margin-top: 1.5rem;

  img {
    width: 25%;
    margin-right: 2rem;
  }
`;

const AuthorDetails = styled.div`
  width: 60%;
  text-align: left;

  p:nthchild(1) {
    font-family: "Spline Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.2rem;
    /* identical to box height */

    color: #000000;
  }
`;

export default Testimonial;
