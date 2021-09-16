export interface reviews {
  product: string,
  page: number,
  count: number,
  results: review[]
}

interface review {
  'review_id': number,
  rating: number,
  summary: string,
  recommend: boolean,
  response: string,
  body: string,
  date: string,
  'reviewer_name': string,
  helpfulness: number,
  photos: photo[]
}

interface photo {
  'thumbnail_url': string,
  'url': string
}