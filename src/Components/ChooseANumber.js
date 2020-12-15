import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChooseANumber = ({ handleSubmit }) => {
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <div>
      <h1>Choose a random number</h1>
      <form>
        <input
          type="number"
          value={randomNumber}
          onChange={(e) => setRandomNumber(e.target.value)}
        />
        <button
          type="submit"
          className="load-btn"
          onClick={(e) => handleSubmit(e, randomNumber)}
        >
          Load
        </button>
      </form>
    </div>
  );
};

ChooseANumber.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ChooseANumber;
