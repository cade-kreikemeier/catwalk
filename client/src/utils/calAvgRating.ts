import { ratings } from '../models/reviewsMetaData.interface';

export default function calAvgRating(metaDataRatings: ratings, increment = 0.25): number {
  let total = 0;
  let number = 0;
  for (let i = 1; i <= 5; i++) {
    if (metaDataRatings[i] !== undefined) {
      total = total + (i) * (parseInt(metaDataRatings[i]));
      number = number + (parseInt(metaDataRatings[i]));
    }
  };
  let avg = total / number;
  const left = avg % increment;
  if (left < (increment / 2)) {
    avg = avg - left;
  } else {
    avg = avg - left + increment;
  }
  return avg;
};