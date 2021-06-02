module.exports = {
    siteMetadata: {
        title: "Tmwlsh Blog",
        titleTemplate: "%s · Tmwlsh Blog",
        description: "The incessant ramblings of an ill-informed web developer",
        url: "https://www.tmwlsh.co.uk",
        image: "/images/share-image.jpg", // Path to your image you placed in the 'static' folder
        twitterUsername: "@tompcw",
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-prismic',
            accessToken: `${process.env.API_KEY}`,
            options: {
                repositoryName: 'tmwlsh-blog',
                schemas: {
                    blog_post: require("./src/schemas/blog_post.json")
                }
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svgs/
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/favicon.png`
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-D6BCVCQS6C"
                ],
                pluginConfig: {
                    head: true
                },
            },
        },
    ]
}
