import clsx from 'clsx';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({className}: {className?: string}) => {
  const [rating, setRating] = React.useState<number>(0);
  const [hover, setHover] = React.useState<number | null>(null); 

  return (
    <div className={clsx('flex items-center', className)}>
      {[...Array(5)].map((_, i) => {
        const currentRate = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              value={currentRate}
              onChange={() => setRating(currentRate)}
              style={{ display: 'none' }}
            />
            <FaStar
              size={20}
              color={currentRate <= (hover || rating) ? "orange" : "gray"}
              onMouseEnter={() => setHover(currentRate)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(currentRate)} 
              style={{ cursor: 'pointer' }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
