import OAuth from 'oauth-1.0a'
import crypto from 'crypto'

const consumerKey = process.env.TWITTER_API_KEY
const consumerSecret = process.env.TWITTER_API_KEY_SECRET
const accessToken = process.env.TWITTER_ACCESS_TOKEN
const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET
const url = 'https://api.twitter.com/2/users/me?user.fields=public_metrics'

const oauth = new OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: 'HMAC-SHA1',
    hash_function(baseString, key) {
        return crypto
            .createHmac('sha1', key)
            .update(baseString)
            .digest('base64')
    },
})

const requestData: OAuth.RequestOptions = {
    url: url,
    method: 'GET',
}

const token = {
    key: accessToken,
    secret: accessTokenSecret,
}

const headers = oauth.toHeader(
    oauth.authorize(requestData, token)
) as unknown as Headers

export const getTweetCount = async () => {
    const response = await fetch(url, { headers })

    if (response.ok) {
        const { data } = await response.json()
        return data.public_metrics.tweet_count
    } else {
        return 0
    }
}