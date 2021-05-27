<script>
    import { AllGistInfo } from './api'
    import BlogItems from './components/BlogItems.svelte'

    import { locale } from 'svelte-i18n'
    import _ from './i18n'

    locale.set('en')

    let AllGistPromise = AllGistInfo()
</script>

<main>
    {#await AllGistPromise}
        <p>{$_('general.loading')}</p>
    {:then blogs}
        {#each blogs as blog}
            <BlogItems data={blog} />
        {:else}
            <p>{$_('general.emptyBlog')}</p>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
