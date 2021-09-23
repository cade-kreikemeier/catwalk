export interface reviewsMetaData {
  'product_id': string,
  ratings: ratings,
  recommended: recommended,
  characteristics: characteristics
}

export interface ratings {
  [ratingLevel: string]: string
}

interface recommended {
  [recommendedVote: string]: string
}

interface characteristics {
  [itemProperty: string]: characteristic
}

interface characteristic {
  id: number,
  value: string
}

export interface reviewsMetaDataInteraction {
  reviewsMetadata: reviewsMetaData | undefined,
  reviewCount: number
}