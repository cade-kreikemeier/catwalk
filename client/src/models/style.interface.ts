export interface style {
  'product_id': string,
  results: resultData[]
}

interface resultData {
  'style_id': number,
  name: string,
  'original_price': string,
  'sale_price': null | string,
  'default?': boolean,
  photos: photo[],
  skus: {
    [skuId: string]: skuData
  }
}

interface skuData {
  quantity: number,
  size: string
}

interface photo {
  'thumbnail_url': string,
  url: string
}
