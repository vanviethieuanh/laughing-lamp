<script>
    import MarkdownIt from 'markdown-it'

    // NEW: Import `highlight.js`
    import hljs from 'highlight.js'

    export let markdown = ''

    // Initialize `markdown-it`
    // NEW: Configure highlight via constructor params!
    const md = new MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error('Failed to highlight string')
                }
            }
            return '' // use external default escaping
        },
    })

    // Render to an html string
    const rendered = md.render(markdown)
</script>

<!-- Render with the `@html` directive -->
<div>
    {@html rendered}
</div>

<style>
    :global(h1) {
        font-size: 40px;
        line-height: 48px;
        font-family: 'Poppins', sans-serif;
    }

    :global(pre) {
        font-size: 14px;
        padding-left: 12px;
        border: rgb(231, 231, 231) solid 1px;
        background-color: #fcfcfc;
        border-radius: 2px;
        padding: 1rem;
    }
</style>
