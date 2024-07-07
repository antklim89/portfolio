import { type FC, useEffect } from 'react';

const NetlifyIdentityWidget: FC = () => {
    useEffect(() => {
        if (!window.location.hash.startsWith('#invite_token')) return;
        import('netlify-identity-widget')
            .then(({ default: netlifyIdentity }) => {
                netlifyIdentity.init({
                    container: '#netlify-identity-widget',
                    locale: 'en',
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return <div id="netlify-identity-widget" />;
};

export default NetlifyIdentityWidget;
