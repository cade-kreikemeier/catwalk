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
  [recommendedBoolean: string]: string
}

interface characteristics {
 [itemProperty: string]: idValue
}

interface idValue {
  'id': number,
  'value': string
}

