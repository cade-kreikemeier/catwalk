export interface reviewSubmission {
  productId: number,
  rating: number,
  summary: string,
  body: string,
  recommend: boolean,
  name: string,
  email: string,
  photos: string[],
  characteristics: characteristic
}

interface characteristic {
  id: number,
  value: string
}
