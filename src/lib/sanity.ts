import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: '2023-02-04', // use current UTC date - see "specifying API version"!
    token: import.meta.env.PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
})
