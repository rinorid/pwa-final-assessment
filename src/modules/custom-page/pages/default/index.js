import { withTranslation } from '@i18n';
import { withApollo } from '@lib_apollo';
import dynamic from 'next/dynamic';
import Core from '@core_modules/custom-page/pages/default/core';
// import Content from '@core_modules/popular/pages/default/components';
const Content = dynamic(() => import('@core_modules/custom-page/pages/default/components'), { ssr: true });

const Page = (props) => <Core {...props} Content={Content} />;

// Page.getInitialProps = async (ctx) => ({
//     namespacesRequired: ['common', 'validate', 'login'],
//     withAuth: true,
//     query: ctx.query,
// });

export default withApollo({ ssr: true })(withTranslation()(Page));
