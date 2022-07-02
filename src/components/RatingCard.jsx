import React from "react";
import { toast } from "react-toastify";

import star from "../images/icon-star.svg";

const RatingCard = ({ handleSubmit, setRating, rating, disabled }) => {
  const ratingButtonElements = [1, 2, 3, 4, 5].map((number) => (
    <button
      key={number}
      className={`rating-button ${rating === number && "selected"}`}
      onClick={() => {
        toast.dismiss();
        setRating(number);
      }}
    >
      {number}
    </button>
  ));

  return (
    <div>
      <img className='star' src={star} alt='star' />
      <h1 className='title'>How did we do?</h1>
      <p className='text'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='numbersWrapper'>{ratingButtonElements}</div>
      <button
        className='submit-button'
        disabled={disabled}
        onClick={handleSubmit}
      >
        submit
      </button>
    </div>
  );
};

export default RatingCard;
