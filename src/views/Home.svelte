<script>
    import BlogItems from '../components/BlogItems.svelte'
    import SideBar from '../components/SideBar.svelte'

    import { AllGistInfo } from '../api'
    import { language } from '../store'

    import { locale } from 'svelte-i18n'
    import _ from '../i18n'

    const unsubscribe = language.subscribe((lang) => {
        locale.set(lang)
    })

    let AllGistPromise = AllGistInfo()
</script>

<main>
    {#await AllGistPromise}
        <p>{$_('general.loading')}</p>
    {:then blogs}
        <div class="blogs">
            {#each blogs as blog}
                <BlogItems url={blog.url} id={blog.id} />
            {:else}
                <p>{$_('general.emptyBlog')}</p>
            {/each}
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

    <SideBar />
</main>

<style scoped>
    main {
        max-width: 1024px;

        padding: 24px 12px;

        display: grid;
        grid-template-columns: auto 300px;
        gap: 24px;
    }
    .blogs {
        display: flex;
        flex-direction: column;
    }
</style>
