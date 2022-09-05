import React from 'react';
import Link from 'next/link';
import { formatPrice } from '@helper_currency';
import Typography from '@common_typography';
import Image from '@core_modules/commons/Image/index';

function Popular(props) {
  const {products, t} = props;
  console.log(props);
  return (
    <div>
        <Typography variant="h1" align="center">Hello new page!</Typography>
        <Typography variant="h3" align="center">{t('popular:randomTranslatePopular')}</Typography>

        <div className='row product-wrapper'>
              {
                  products.items.map((item) => (
                      <div key={item.uid} className='col-xs-6 col-md-3 product-item'>
                          <Link
                              href="/[...slug]"
                              as={`/${item.url_key}`}
                          >
                              <a>
                                  <Image
                                      src={item.small_image.url}
                                      alt={item.name}
                                  />
                                  <Typography variant="h4" type="bold" align="center">{item.name}</Typography>
                                  <Typography variant="h4" className="product-price" type="bold" align="center">
                                      {formatPrice(
                                          item.price_range.minimum_price.final_price.value,
                                          item.price_range.minimum_price.final_price.currency || 'IDR',
                                      )}
                                  </Typography>
                              </a>
                          </Link>
                      </div>
                  ))
              }
          </div>
    </div>
  )
}

export default Popular