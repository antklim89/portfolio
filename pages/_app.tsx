import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/700-italic.css';
import 'normalize.css';

import Layout from '~/layouts/Layout';

import '~/styles/main.scss';
import '~/styles/properties.scss';


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};


export default appWithTranslation(MyApp);
