<script>
    import { AllGistInfo } from './api'
    import BlogItems from './components/BlogItems.svelte'

    let AllGistPromise = AllGistInfo()
</script>

<main>
    <h1>Hello!</h1>

    {#await AllGistPromise}
        <p>...waiting</p>
    {:then blogs}
        {#each blogs as blog}
            <BlogItems
                title={blog.langs[0].title}
                createdTime={blog.createdTime}
                description={blog.langs[0].description}
            />
        {:else}
            <li>Empty list</li>
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
