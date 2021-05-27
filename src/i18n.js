import { dictionary, locale, _ } from 'svelte-i18n'

import en from './lang/en.json'
import vi from './lang/vi.json'

dictionary.set({
    en: en,
    vi: vi,
})

locale.set('en')

export default _
