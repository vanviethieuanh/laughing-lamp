<script>
    import { onMount } from 'svelte'

    export let data

    onMount(async () => {
        const res = await fetch(gist_url)
        console.log(res)
    })
</script>

<article>
    <h1>{data.url}</h1>
</article>
