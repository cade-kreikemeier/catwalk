import { ratings } from '../models/reviewsMetaData.interface';

export default function calAvgRating(metaDataRatings: ratings): number {
  let total = 0;
  let number = 0;
  for (let i = 1; i <= 5; i++) {
    if (metaDataRatings[i] !== undefined) {
      total = total + (i) * (parseInt(metaDataRatings[i]));
      number = number + (parseInt(metaDataRatings[i]));
    }
  };
  let avg = total / number;
  const left = avg % 0.25;
  if (left < 0.125) {
    avg = avg - left;
  } else {
    avg = avg - left + 0.25;
  }
  return avg / 5 * 100;
};