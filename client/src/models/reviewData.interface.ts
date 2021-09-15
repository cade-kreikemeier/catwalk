export interface reviewData {
  product: string,
  page: number,
  count: number,
  results: resultData[]
}

interface photoData {
  'thumbnail_url': string,
  'url': string
}

interface resultData {
  'review_id': number,
  rating: number,
  summary: string,
  recommend: boolean,
  response: string,
  body: string,
  date: string,
  'reviewer_name': string,
  helpfulness: number,
  photos: photoData[]
}