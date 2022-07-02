import React from "react";

import thankYou from "../images/illustration-thank-you.svg";

const ThankYouCard = ({ rating }) => {
  return (
    <div className='thankYou'>
      <img className='thankYou-img' src={thankYou} alt='thank you' />
      <p className='rating-text'>You selected {rating} out of 5</p>
      <h1 className='title'>Thank You!</h1>
      <p className='text center'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouCard;
