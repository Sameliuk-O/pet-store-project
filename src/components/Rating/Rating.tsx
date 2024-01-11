import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RatingProps {
  rating: string | undefined;
}
const Rating: React.FC<RatingProps> = ({ rating }) => {
  const MAX_RATING = 5;
  const ratingNumber = Number(rating);
  const filledStars = Math.floor(ratingNumber);
  const hasHalfStar = ratingNumber - filledStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= MAX_RATING; i++) {
      if (i <= filledStars) {
        stars.push(<FontAwesomeIcon color="#fbbf24" icon={solidStar} key={i} />);
      } else if (i === filledStars + 1 && hasHalfStar) {
        stars.push(<FontAwesomeIcon color="#fbbf24" icon={solidStar} key={i} />);
      } else {
        stars.push(<FontAwesomeIcon color="#fbbf24" icon={regularStar} key={i} />);
      }
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
