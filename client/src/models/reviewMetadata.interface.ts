export interface reviewMetadata {
  'product_id': string,
  'ratings': ratings,
  'recommended': recommended,
  'characteristics': characteristics
}

interface ratings {
  [ratingLevel: string]: string
}

interface recommended {
  [recommendedVote: string]: string
}

interface characteristics {
 [itemProperty: string]: characteristic
}

interface characteristic{
  'id': number,
  'value': string
}

