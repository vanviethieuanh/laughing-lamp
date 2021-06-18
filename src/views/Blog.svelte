<script>
    import { language } from '../store'
    import _ from '../i18n'
    import MarkDown from '../components/MarkDown.svelte'

    import { onMount } from 'svelte'
    import { locale } from 'svelte-i18n'

    import 'highlight.js/styles/stackoverflow-light.css'

    const unsubscribe = language.subscribe((lang) => {
        locale.set(lang)
    })

    export let params = {}

    let blog
    let posted

    onMount(async function () {
        const url = `https://api.github.com/gists/${params.id}`
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        }
        const response = await fetch(url, options)
        blog = await response.json()

        posted = new Date(blog.created_at)
    })
</script>

<div class="blog">
    <img
        id="banner"
        src="https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600"
        alt=""
    />
    <div class="container">
        {#if blog}
            <p class="created_at">
                {$_('blog.elements.postedPrompt')}
                {posted.toLocaleDateString()}
                {posted.toLocaleTimeString()}
            </p>

            <article>
                <MarkDown markdown={blog.files[`${$language}.md`].content} />
            </article>
        {/if}
    </div>
</div>

<style scoped>
    .blog {
        background-color: white;
        width: 100vw;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container {
        width: 700px;
    }

    article {
        display: flex;
        flex-direction: column;
    }

    .created_at {
        font-family: 'Roboto Mono', monospace;
        font-size: 12px;
        color: var(--black-3);

        margin: 0;
        padding-top: 12px;
    }

    #banner {
        height: 30vh;
        width: 100%;
        object-fit: cover;
    }
</style>
