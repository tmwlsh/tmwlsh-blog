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
        }
    ]
}
