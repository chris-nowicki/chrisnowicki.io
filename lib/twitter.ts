export const getTweetCount = async () => {
    const response = await fetch(
        `https://api.twitter.com/2/users/by/username/leeerob?user.fields=public_metrics`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
            },
        }
    )

    const { data } = await response.json()
    return Number(data.public_metrics.tweet_count)
}
