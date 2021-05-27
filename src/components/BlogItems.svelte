<script>
    import { onMount } from 'svelte'
    import { language } from '../store'

    export let url

    let blog = {}
    let extract = {}

    let created = 'now'

    onMount(async () => {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        }
        const response = await fetch(url, options)
        blog = await response.json()

        // Set created time
        created = new Date(blog.created_at).toLocaleDateString()

        // Extract title and description from markdown
        const source = blog.files[`${$language}.md`].content
        let contents = source
            .split('\n')
            .filter((e) => e)
            .slice(0, 2)

        extract = {
            title: contents[0].replace(/^#{1}\s{1,}/, ''),
            description: contents[1],
        }
    })
</script>

<article>
    <h1>{extract.title}</h1>
    <p>{extract.description}</p>
    <p>{created}</p>
</article>
