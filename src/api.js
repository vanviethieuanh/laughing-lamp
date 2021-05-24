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
    const blogs = json.filter((b) => b.description == '#gist_blog')
    const blogs_info = await Promise.all(
        blogs.map(async (b) => {
            let result = await GetBlogConfig(b.files['config.json'].raw_url)
            result.createdTime = new Date(b.created_at).toLocaleDateString()
            return result
        })
    )

    console.log(blogs_info)
    return blogs_info
}

export async function GetBlogConfig(url) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    }
    let response = await fetch(url, requestOptions)

    return await response.json()
}
