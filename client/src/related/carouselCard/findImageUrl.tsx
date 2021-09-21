import { style } from '../../models/style.interface';

function findImageUrl(style: style | null): string {
  if (style === null) {
    return '';
  } else {
    return style.results[0].photos[0].thumbnail_url || '';
  }
}

export default findImageUrl;