export default (_, inject) => {
    inject('headUtils', data => ({
        title: data.title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'og:image',
                property: 'og:image',
                content: data.image ? data.image : "/seo.png"
            },
            {
                hid: 'og:site_name',
                name: 'og:site_name',
                content: data.site_name
            },
            { hid: 'og:title', name: 'og:title', content: data.title },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: data.title
            },
            { hid: 'twitter:site', name: 'twitter:site', content: data.tw_site ? data.tw_site : '@tomo_it14' },
            { hid: 'twitter:creator', name: 'twitter:creator', content: data.tw_creator ? data.tw_creator : '@tomo_it14' },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: data.title
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: data.description
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: data.tw_image ? data.tw_image : "/seo"
            },
        ],
    }))
}