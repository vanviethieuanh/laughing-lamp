import Blog from './views/Blog.svelte'
import NotFound from './views/404.svelte'
import Home from './views/Home.svelte'

export default {
    '/': Home,
    '/blog/:id': Blog,

    // Catch all route, must be last
    '*': NotFound,
}
