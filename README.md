# Laughing Lamp

This is a project that help you create a blog website with no configuration, free in charge and easy to use.

### How to setup ?

1. Fork this repo
2. On the `/src/config.js` change the username property to your github username

🎉 Congratulations, your blog is avaible at username.github.io/laughing-lamp

### How to write a blog ?

1. Go to the gist
2. Create a public gist with description is `gist_blog`
3. Create a file name `en.md` .You can change it what ever language alias you like, for example vi.md for Vietnamese post. But remember you must have the `defaultLanguage` (which can change in `src/config.js`) markdown file for the default language of your blog.

### Rendering

-   First heading1 will be rendered as title of the article
-   The next paragraph will be rendered as the lead of the article
-   The day you created the gist is the time show on article
