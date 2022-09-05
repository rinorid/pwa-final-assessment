/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
/* eslint-disable operator-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import { getAppEnv } from '@helpers/env';
import Layout from '@layout';
import React, { useRef } from 'react';
import { getProducts } from '@core_modules/popular/services/graphql';
const appEnv = getAppEnv();

const Popular = (props) => {
    const { t, Content, pageConfig } = props;
    const config = {
        title: 'Popular Page',
        header: 'relative', // available values: "absolute", "relative", false (default)
        headerTitle: 'Header title',
        headerBackIcon: 'close',
        bottomNav: false,
    };

    const {data, loading} = getProducts();

    console.log('data', data);
    console.log('loading', loading);


    React.useEffect(() => {

    }, []);

    if (loading) {
        return (
            <Layout {...props} pageConfig={pageConfig || config} isLoginPage>
                    <h1>Loading....</h1>
            </Layout>
        );
    }

    const { products } = data;

    return (
        <Layout {...props} pageConfig={pageConfig || config} isLoginPage>
            <Content
                t={t}
                products={products}
            />
        </Layout>
    );
};

export default Popular;
