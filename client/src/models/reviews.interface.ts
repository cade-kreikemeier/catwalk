export interface reviews {
  product: string,
  page: number,
  count: number,
  results: review[]
}

export interface review {
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
  url: string
}

export interface reviewsProps {
  reviews: reviews | null,
  setReviews: React.Dispatch<React.SetStateAction<reviews>>
}