module.exports = {
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
