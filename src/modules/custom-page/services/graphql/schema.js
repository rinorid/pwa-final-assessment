import {gql} from '@apollo/client'

export const getProductSchema = gql`
    query getProducts {
        products(search: "", sort: {
            relevance: DESC
            }
        ){
            total_count
            items{
                id
                attribute_set_id
                name
                sku
                url_key
                small_image {
                    url
                    label
                }
                price_range{
                    maximum_price{
                        discount{
                            amount_off
                            percent_off
                        }
                        final_price{
                            currency
                            value
                        }
                        fixed_product_taxes{
                            amount{
                                currency
                                value
                            }
                            label
                        }
                        regular_price{
                            currency
                            value
                        }
                    }
                    minimum_price{
                        discount{
                            amount_off
                            percent_off
                        }
                        final_price{
                            currency
                            value
                        }
                        fixed_product_taxes{
                            amount{
                                currency
                                value
                            }
                            label
                        }
                        regular_price{
                            currency
                            value
                        }
                    }
                }
            }
        }
        
    }
` 