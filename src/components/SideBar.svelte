<script>
    import { language } from '../store'
    import { categories, defaultLanguage } from '../config'
    import { UserInfo } from '../api'

    import { locale } from 'svelte-i18n'
    import { onMount } from 'svelte'
    import _ from '../i18n'

    let user = UserInfo()
    let lang = defaultLanguage

    let filter = {}
    filter.categories = categories

    let select = []

    const unsubscribe = language.subscribe((lang) => {
        locale.set(lang)
        lang = lang
    })

    onMount(() => {
        feather.replace()
    })
</script>

<div class="sideBar">
    <div class="author">
        {#await user}
            <p class="username">{$_('home.sidePannel.loading.waiting')}</p>
            <div />
        {:then userInfo}
            <img src={userInfo.avatar_url} alt="" class="avatar" />
            <div class="info">
                <b class="name">{userInfo.name}</b>
                <p class="username">{userInfo.login}</p>
            </div>
            <a class="about" href="about">{$_('home.sidePannel.user.about')}</a>
        {/await}
    </div>
    <div class="filter">
        <input
            class="search-bar"
            type="text"
            placeholder={$_('home.sidePannel.filter.searchBarPlaceholder')}
        />
        <div class="categories">
            {#each filter.categories as category}
                <input
                    id={category.alias}
                    type="checkbox"
                    bind:group={select}
                    value={category}
                />
                <label class="check" for={category.alias}>
                    <div>
                        <div class="icon">
                            <i data-feather={category.icon} />
                        </div>
                        <p>{category.title[`${lang}`]}</p>
                    </div>
                </label>
            {/each}
        </div>
    </div>
</div>

<style scoped>
    .feather {
        --size: 24px;

        width: var(--size);
        height: var(--size);
        stroke: currentColor;
        stroke-width: 1.6;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
    }

    .sideBar {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .sideBar > div {
        background-color: white;

        border-radius: var(--radius);
        box-shadow: var(--shadow);
    }

    .author {
        align-items: center;

        display: flex;
        flex-direction: row;

        padding: 0 17px;
        gap: 12px;
        height: 70px;
    }

    .author :last-child {
        margin-left: auto;
    }

    .author .info b {
        margin: 0;
        padding: 0;

        font-size: 16px;
        font-weight: 400;

        color: var(--black-1);
    }

    .author .info p {
        margin: 0;
        padding: 0;

        font-size: 12px;
        color: var(--black-3);
    }

    .author .avatar {
        --size: 36px;

        width: var(--size);
        height: var(--size);

        border-radius: 50%;
    }

    .author .about {
        font-size: 12px;

        opacity: 0.6;
    }
    .filter {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        padding: 12px;
    }

    .filter .search-bar {
        border: none;
        outline: none;

        background-color: var(--white-1);
        border-radius: var(--radius);
        height: 44px;
        width: 100%;

        padding-left: 14px;
    }

    .filter .search-bar::placeholder {
        font-size: 14px;
        color: var(--black-3);
    }

    .categories {
        display: grid;
        gap: 6px;
    }

    .check {
        cursor: pointer;
        position: relative;
        -webkit-tap-highlight-color: transparent;
        transform: translate3d(0, 0, 0);
    }

    .check > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    .check > div .icon {
        --size: 36px;

        background-color: var(--white-1);

        display: grid;
        place-items: center;

        border-radius: var(--radius);

        width: var(--size);
        height: var(--size);

        color: var(--black-1);
    }

    .check > div p {
        padding: 0 12px;
        margin: 0;

        user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;

        font-size: 14px;
        color: var(--black-2);
    }

    .categories input[type='checkbox'] {
        display: none;
    }

    .categories input[type='checkbox']:checked + .check .icon {
        background-color: var(--main);

        color: white;
    }
    .categories input[type='checkbox']:checked + .check p {
        color: var(--black-1);
    }
</style>
