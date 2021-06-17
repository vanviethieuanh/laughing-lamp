<script>
    import { language } from '../store'

    import { locale } from 'svelte-i18n'
    import _ from '../i18n'

    const unsubscribe = language.subscribe((lang) => {
        locale.set(lang)
    })

    import { UserInfo } from '../api'

    let user = UserInfo()
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
            <a class="about" href="about">{$_('home.sidePannel.about')}</a>
        {/await}
    </div>
    <div class="filter">
        <div class="search-bar">
            <input type="text" />
            <button class="search" />
        </div>
        <!-- <div class="categories">
            <div class="programming">
                <div class="icon">
                    <i data-feather="circle" />
                </div>
            </div>
        </div> -->
    </div>
</div>

<style scoped>
    .sideBar {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .sideBar > div {
        background-color: white;

        padding: 0 17px;

        border-radius: var(--radius);
        box-shadow: var(--shadow);

        display: flex;
        align-items: center;
    }

    .author {
        display: flex;
        flex-direction: row;

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
</style>
