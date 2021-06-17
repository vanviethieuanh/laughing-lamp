<script>
    import { language, title } from './store'
    import { AllGistInfo } from './api'

    import BlogItems from './components/BlogItems.svelte'
    import SideBar from './components/SideBar.svelte'

    import { locale } from 'svelte-i18n'
    import _ from './i18n'

    let AllGistPromise = AllGistInfo()

    const unsubscribe = language.subscribe((lang) => {
        locale.set(lang)
    })
</script>

<svelte:head>
    <title>{$title}</title>
</svelte:head>
<main>
    {#await AllGistPromise}
        <p>{$_('general.loading')}</p>
    {:then blogs}
        <div class="blogs">
            {#each blogs as blog}
                <BlogItems url={blog.url} />
            {:else}
                <p>{$_('general.emptyBlog')}</p>
            {/each}
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

    <SideBar />
</main>

<style>
    main {
        max-width: 1024px;

        padding: 24px 12px;

        display: grid;
        grid-template-columns: auto 300px;
        gap: 20px;
    }

    .blogs {
        display: flex;
        flex-direction: column;
    }
</style>
