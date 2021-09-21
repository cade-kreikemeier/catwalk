import findImageUrl from '../findImageUrl';

test('given null, return an empty string', () => {
  expect(findImageUrl(null)).toBe('');
});


test('given a full styles list, return the thumbnail string', () => {
  const style = {
    product_id: '1',
    results: [
      {
        style_id: 1,
        name: 'Forest Green & Black',
        original_price: '140',
        sale_price: '0',
        'default?': true,
        photos: [
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_1_photo_number.jpg'
          },
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_1_photo_number.jpg'
          }
          // ...
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS'
          },
          38: {
            quantity: 16,
            size: 'S'
          },
          39: {
            quantity: 17,
            size: 'M'
          }
          // ...
        }
      },
      {
        style_id: 2,
        name: 'Desert Brown & Tan',
        original_price: '140',
        sale_price: '0',
        'default?': false,
        photos: [
          {
            thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_2_photo_number.jpg'
          }
          // ...
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS'
          },
          38: {
            quantity: 16,
            size: 'S'
          },
          39: {
            quantity: 17,
            size: 'M'
          }
          // ...
        }
      }
      // ...
    ]
  };
  expect(findImageUrl(style)).toBe('urlplaceholder/style_1_photo_number_thumbnail.jpg');
});

test('given a styles list with null thumbnail, return an empty string', () => {
  const style = {
    product_id: '1',
    results: [
      {
        style_id: 1,
        name: 'Forest Green & Black',
        original_price: '140',
        sale_price: '0',
        'default?': true,
        photos: [
          {
            thumbnail_url: null,
            url: null
          },
          {
            thumbnail_url: null,
            url: null
          }
          // ...
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS'
          },
          38: {
            quantity: 16,
            size: 'S'
          },
          39: {
            quantity: 17,
            size: 'M'
          }
          // ...
        }
      },
      {
        style_id: 2,
        name: 'Desert Brown & Tan',
        original_price: '140',
        sale_price: '0',
        'default?': false,
        photos: [
          {
            thumbnail_url: null,
            url: null
          }
          // ...
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS'
          },
          38: {
            quantity: 16,
            size: 'S'
          },
          39: {
            quantity: 17,
            size: 'M'
          }
          // ...
        }
      }
      // ...
    ]
  };
  expect(findImageUrl(style)).toBe('');
});