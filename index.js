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

const messages = {
  sv,
  en,
}

const LuTemplatePlugin = {
  install (app, i18n) {
    const logPrefix = '%c[@lu.se/vue-template] '
    const logStyle = 'font-weight: bold; color: #875E29; font-family: system-ui'

    console.group(logPrefix, logStyle, 'Installing package\'s Vue plugin..')
    console.log(logPrefix, logStyle, 'Explanation: what the plugin does is merge the i18n strings used in ' +
      'the package into your app\'s i18n instance.')
    console.debug('i18n:', i18n)

    if (!i18n) {
      console.error(
        logPrefix, logStyle, 'vue-i18n not found. ' +
        'Please install vue-i18n before installing @lu.se/vue-template, ' +
        'or manually merge the messages.',
      )
      console.groupEnd()
      return
    }

    console.groupCollapsed(
      logPrefix, logStyle,
      'Checking locales..',
    )

    console.table({
      'Package locales': Object.keys(messages).sort(),
      'App locales': i18n.global.availableLocales.sort(),
    })

    const localesOnlyInPackage = Object.keys(messages).filter(locale => !i18n.global.availableLocales.includes(locale))
    const localesOnlyInConsumer = i18n.global.availableLocales.filter(locale => !Object.keys(messages).includes(locale))
    if (localesOnlyInPackage.length) {
      console.log(
        'Locales in package but not in your app: [ %s ]',
        localesOnlyInPackage.join(', '),
      )
    }
    if (localesOnlyInConsumer.length) {
      console.log(
        'Locales in your app but not in package: [ %s ]',
        localesOnlyInConsumer.join(', '),
      )
    }
    console.groupEnd()

    const matchingLocales = Object.keys(messages).filter(locale => i18n.global.availableLocales.includes(locale))
    if (matchingLocales.length === 0) {
      console.error(
        logPrefix, logStyle, 'i18n instance locales do not match any of the package\'s locales. ' +
        'Please check your vue-i18n configuration. ' +
        'The format used in this packages is ISO 639 (e.g. "sv", "en"). ' +
        'If you cannot resolve this, you can resort to manually merging the messages, ' +
        'see this package\'s README: https://github.com/johandalabacka/lu.se-vue-template/tree/master',
      )
      console.groupEnd()
      console.error(logPrefix, logStyle, 'Messages were not merged successfully')
      return
    }

    // Merge package's messages into global i18n (the consumer's messages)
    matchingLocales.forEach(locale => {
      const existingMessages = i18n.global.getLocaleMessage(locale) || {}
      i18n.global.setLocaleMessage(locale, {
        ...messages[locale],
        ...existingMessages,
      })
    })
    if (localesOnlyInConsumer.length) {
      console.warn(
        logPrefix,
        logStyle,
        'Your locales [',
        localesOnlyInConsumer.join(', '),
        '] do not exist in the package messages.',
      )
    }

    console.groupEnd()
    console.log(
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

export default LuTemplatePlugin
