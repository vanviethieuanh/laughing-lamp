import { writable } from 'svelte/store'
import config from './config'

export let language = writable(config.defaultLanguage)
