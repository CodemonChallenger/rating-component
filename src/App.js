import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";
import Attribution from "./components/Attribution";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const disableButton = () => {
    let timer1 = setTimeout(() => {
      setDisabled(false);
    }, 1200);

    return () => {
      clearTimeout(timer1);
    };
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setIsSubmitted((prev) => !prev);
    } else {
      setDisabled(true);
      disableButton();
      toast.error("Please select a rating", {
        autoClose: 1000,
      });
    }
  };
  const cardVariants = {
    hidden: { x: "1300px", opacity: 0, y: "-50%" },
    visible: {
      x: "-50%",
      opacity: 1,
      y: "-50%",
      transition: {
        duration: 1,
      },
    },
    exit: { x: "-1300px", opacity: 0, y: "-50%", transition: { duration: 1 } },
  };

  return (
    <div className='App'>
      <AnimatePresence>
        {isSubmitted ? (
          <motion.div
            key={1}
            className='card'
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <ThankYouCard rating={rating} />
          </motion.div>
        ) : (
          <motion.div
            key={2}
            className='card'
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <RatingCard
              handleSubmit={handleSubmit}
              setRating={setRating}
              rating={rating}
              disabled={disabled}
              setDisabled={setDisabled}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Attribution />
      <ToastContainer limit={1} />
    </div>
  );
};

export default App;
