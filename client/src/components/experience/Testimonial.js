import React from "react";
import "./testimonials.css";

function Testimonial(props) {
  return (
    <div className="testimonial">
      <p className="testimonialContent">
        {props.content}
      </p>
      <div className="testimonialAuthor">
        <img src={props.img} alt="Author" className="authorImg"/>
        <div className="authorDetails">
          <h3 className="authorName">{props.authorName}</h3>
          <p className="authorPosition">{props.authorPosition}</p>
          <p className="authorOffice">@{props.authorOffice}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
