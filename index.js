import LuHeader from './LuHeader.vue'
import LuBreadCrumb from './LuBreadCrumb.vue'
import LuMain from './LuMain.vue'
import LuRow from './LuRow.vue'
import LuFooter from './LuFooter.vue'
import LuInfobox from './LuInfobox.vue'
import LuSpinner from './LuSpinner.vue'
import LuToTop from './LuToTop.vue'
import sv from './locales/sv.json'
import en from './locales/en.json'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronCircleUp } from '@fortawesome/pro-solid-svg-icons'
import {
  faChevronDoubleDown,
  faChevronDoubleUp,
  faChevronDown,
  faChevronRight,
  faBars,
  faCircleNotch,
  faGlobe,
  faMinusCircle,
  faPlusCircle,
  faSearch,
  faSignIn,
  faSignOut,
  faTimes,
} from '@fortawesome/pro-light-svg-icons'

const messages = {
  sv,
  en,
}

function isI18nInstance (i18n) {
  return (
    i18n &&
    typeof i18n === 'object' &&
    i18n.global &&
    typeof i18n.global.getLocaleMessage === 'function' &&
    typeof i18n.global.setLocaleMessage === 'function' &&
    Array.isArray(i18n.global.availableLocales)
  )
}

const luTemplatePlugin = {
  install (app, i18n) {
    const logPrefix = '%c[@lu.se/vue-template] '
    const logStyle = 'font-weight: bold; color: #875E29; font-family: system-ui'

    library.add(
      faBars,
      faChevronCircleUp,
      faChevronDoubleDown,
      faChevronDoubleUp,
      faChevronDown,
      faChevronRight,
      faCircleNotch,
      faGlobe,
      faMinusCircle,
      faPlusCircle,
      faSearch,
      faSignIn,
      faSignOut,
      faTimes,
    )
    app.component('FaIcon', FontAwesomeIcon)

    if (!isI18nInstance(i18n)) {
      console.error(
        logPrefix, logStyle, 'A valid vue-i18n instance was not provided. ' +
        'Please pass the i18n instance when installing the plugin: app.use(luTemplate, i18n)',
      )
      return
    }

    const matchingLocales = Object.keys(messages).filter(locale => i18n.global.availableLocales.includes(locale))
    if (matchingLocales.length === 0) {
      console.error(
        logPrefix, logStyle, 'i18n instance locales do not match any of the package\'s locales. ' +
        'Please check your vue-i18n configuration. ' +
        'The format used in this packages is ISO 639 (e.g. "sv", "en"). ' +
        'If you cannot resolve this, you can resort to manually merging the messages, ' +
        'see this package\'s README: https://github.com/johandalabacka/lu.se-vue-template/tree/master',
      )
      return
    }

    try {
    // Merge package's messages into global i18n (the consumer's messages)
      matchingLocales.forEach(locale => {
        const existingMessages = i18n.global.getLocaleMessage(locale) || {}
        i18n.global.setLocaleMessage(locale, {
          ...messages[locale],
          ...existingMessages,
        })
      })
    } catch (error) {
      console.error(
        logPrefix, logStyle, 'An error occurred while merging messages:',
        error,
      )
      return
    }

    const localesOnlyInConsumer = i18n.global.availableLocales.filter(locale => !Object.keys(messages).includes(locale))
    if (localesOnlyInConsumer.length) {
      console.warn(
        logPrefix,
        logStyle,
        'Your locales [',
        localesOnlyInConsumer.join(', '),
        '] do not exist in the package messages.',
      )
    }

    console.debug(
      logPrefix,
      logStyle,
      'Messages merged',
      localesOnlyInConsumer.length !== 0 ? '(mostly) successfully' : 'successfully',
    )
  },
}

export {
  LuHeader,
  LuBreadCrumb,
  LuMain,
  LuRow,
  LuFooter,
  LuInfobox,
  LuSpinner,
  LuToTop,
  messages,
}

export default luTemplatePlugin
