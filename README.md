# Laughing Lamp

This is a project that help you create a blog website with simple configuration, free in charge and easy to use.

## Quick Start

### How to setup ?

1. Fork this repo, clone it
2. On the `/src/config.js` change the username property to your github username
3. run `npm run rocket`
4. run `cd public && git add . && git commit -m "setup my blog" && git push`

🎉 Congratulations, your blog is avaible at `username.github.io/laughing-lamp`

### How to write a blog ?

1. Go to the gist
<<<<<<< HEAD
2. Create a **public** gist with description is `gist_blog`
3. Create a file name `en.md` .You can change it what ever language alias you like, for example `vi.md` for Vietnamese post. But remember you must have the `defaultLanguage` (which can change in `src/config.js`) markdown file for the default language of your blog.
=======
2. Create a public gist with description is `gist_blog`
3. Create a file name `en.md` .You can change it what ever language alias you like, for example vi.md for 🇻🇳 Vietnamese post. But remember you must have the `defaultLanguage` (which can change in `src/config.js`) markdown file for the default language of your blog.
>>>>>>> 8d40d616187a53b0d71b727b5f2a64e99053be7a

### Rendering

-   First heading1 will be rendered as title of the article
-   The next paragraph will be rendered as the lead of the article
-   The day you created the gist is the time show on article

## More Configuration

### The config.js

`src/config.js` is file that contain all basic configurations for your blog

1. username: Your github username
2. defaultLanguage: default language alias for your blog
3. staticTitle: Default static title of your homepage
