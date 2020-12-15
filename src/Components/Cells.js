import React from 'react';
import PropTypes from 'prop-types';

const Cells = ({ cells, numberToColor }) => {
  return (
    <div>
      {cells.map((number, i) => (
        <svg key={i}>
          <rect width="100%" height="100%" fill={numberToColor(number)} />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
          >
            {number}
          </text>
        </svg>
      ))}
    </div>
  );
};

Cells.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.number).isRequired,
  numberToColor: PropTypes.func.isRequired,
};

export default Cells;
