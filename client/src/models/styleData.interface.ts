export interface styleData {
  'product_id': string,
  'results': resultData[]
}

interface resultData {
  'style_id': number,
  'name': string,
  'original_price': string,
  'sale_price': null | string,
  'default?': boolean,
  'photos': photoData[], //expect an arr with objects
  'skus': {
    [skuId: string]: skuData  //doesn't really tell what skuId is, just need to be a string
  }
}

interface skuData {
  quantity: number,
  size: string
}

interface photoData {
  'thumbnail_url': string,
  'url': string
}
