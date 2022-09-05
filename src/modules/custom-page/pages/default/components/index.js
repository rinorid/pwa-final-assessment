import React from 'react';
import Link from 'next/link';
import { formatPrice } from '@helper_currency';
import Typography from '@common_typography';
import Image from '@core_modules/commons/Image/index';
import GridList from '@common_gridlist';
// import ProductItem from '@plugin_productitem';

const ProductItem = (item, other) => {
    return (
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
    )
}

function CustomPage(props) {
  const {products, t} = props;
//   console.log(props);
  return (
    <div>
         <Typography
            variant="h1"
            align="center"
        >
            {'Custom Page'}
        </Typography>
        <GridList
            data={products ? products.items : []}
            ItemComponent={ProductItem}
            className="grid"
            itemProps={{
                isGrid: true,
                catalogList: true,
                className: 'grid-item',
            }}
            gridItemProps={{ xs: 6, md: 3 }}
        />
    </div>
  )
}

export default CustomPage