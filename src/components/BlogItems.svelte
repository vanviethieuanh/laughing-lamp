<script>
    import { onMount } from 'svelte'
    import { language } from '../store'
    import { username } from '../config'

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

<article class="article" author={username}>
    <div class="thumbnail">
        <img src="https://source.unsplash.com/3LTht2nxd34/240x240/" alt="" />
    </div>
    <div class="content">
        <h1 class="title">{extract.title}</h1>
        <p class="description">{extract.description}</p>
        <p class="created-at">{created}</p>
    </div>
</article>

<style>
    article {
        background: white;
        border-radius: var(--radius);

        box-shadow: var(--shadow);

        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-end;

        padding: 0;
        min-height: 247px;
        max-width: 700px;
    }

    .thumbnail {
        display: flex;
        padding: 12px;
    }

    .content {
        height: 100%;
        padding: 12px;
        padding-right: 24px;
    }

    img {
        border-radius: var(--radius);
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: medium;
        color: var(--black-1);
        font-size: 24px;
        max-width: 40ch;
    }

    p.description {
        font-family: 'Roboto', sans-serif;
        color: var(--black-2);
        font-size: 16px;
    }
    p.created-at {
        font-family: 'Roboto Mono', monospace;
        color: var(--black-3);
        font-size: 12px;

        margin-top: auto;
    }
</style>
