<script>
    import routes from './routes'
    import Router from 'svelte-spa-router'

    import { title } from './store'
</script>

<svelte:head>
    <title>{$title}</title>
</svelte:head>

<Router {routes} />
