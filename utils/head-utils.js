export default (_, inject) => {
    inject('headUtils', data => ({
        htmlAttrs: {
            lang: data.lang
        },
        title: data.title,
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: data.description
            },
            {
                name: 'keywords',
                content: ['portfolio', 'developer', 'rattanachat', 'tom', 'resume']
            },
            {
                property: 'og:title',
                name: 'og:title',
                content: data.title
            },
            {
                property: 'og:description',
                name: 'og:description',
                content: data.description
            },
            {
                property: 'og:url',
                name: 'og:url',
                content: 'rattanachat.com'
            },
            {
                property: 'og:site_name',
                name: 'og:site_name',
                content: "Rattanachat's Portfolio"
            },
            {
                property: 'og:image',
                name: 'og:image',
                content: data.image
            },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: data.cardType || 'summary_large_image',
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: data.image,
            },
        ],
        link: [
            {
                rel: 'canonical',
                href: data.urlPath ? data.urlPath : ''

            }
        ]

    }))
}