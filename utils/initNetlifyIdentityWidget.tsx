

export const initNetlifyIdentityWidget = (container: string) => {
    if (!window.location.hash.startsWith('#invite_token')) return;
    import('netlify-identity-widget')
        .then(({ default: netlifyIdentity }) => {
            netlifyIdentity.init({
                container: `#${container}`,
                locale: 'en',
            });
        })
        .catch((err) => {
            console.error(err);
        });
};
