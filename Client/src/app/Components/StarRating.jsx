import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


const StarRating = ({ rating, outOf = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = outOf - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalfStar && <FaStarHalfAlt key="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

export default StarRating;
