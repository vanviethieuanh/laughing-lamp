import config from './config'

export async function AllGistInfo() {
    // Get all gists of user from github api
    const url = `https://api.github.com/users/${config.username}/gists`
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    }

    const response = await fetch(url, options)
    const json = await response.json()

    // filter to get blog
    const blogs = json.filter((b) =>
        b.description.split(' ').includes('gist_blog')
    )

    return blogs
}

export async function GetBlogConfig(url) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }
    let response = await fetch(url, requestOptions)

    return await response.json()
}
