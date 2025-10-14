<template>
  <main
    class="main"
    :class="{'mt-2': props.compact}"
  >
    <!-- <p>{{ t('start') }}</p>
    <p>{{ t('pageManager') }}</p> -->
    <div class="container">
      <div
        v-if="props.leftmenu"
        class="row"
      >
        <LuLeftMenu :menu="props.leftmenu" />
        <div class="col-12 col-xl-9 mb-6 mb-xl-0">
          <slot />
          <div
            v-if="props.pageManagerMail"
            class="row"
          >
            <div class="col-12 col-lg-8">
              <div class=" border-top border-dark mt-5 py-3">
                {{ t('pageManager') }}: <a :href="`mailto:${props.pageManagerMail}`">{{ props.pageManagerMail }}</a>
                &nbsp;|&nbsp; <strong>{{ props.lastUpdated }}</strong>
                <template v-if="props.pageManagerNotice">
                  <br><small>{{ props.pageManagerNotice }}</small>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <slot />
        <div
          v-if="props.pageManagerMail"
          class="row"
        >
          <div class="col-12 col-lg-8">
            <div class=" border-top border-dark mt-5 py-3">
              {{ t('pageManager') }}: <a :href="`mailto:${props.pageManagerMail}`">{{ props.pageManagerMail }}</a>
              &nbsp;|&nbsp; <strong>{{ props.lastUpdated }}</strong>
              <template v-if="props.pageManagerNotice">
                <br><small>{{ props.pageManagerNotice }}</small>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

import LuLeftMenu from './LuLeftMenu.vue'

const props = defineProps({
  leftmenu: { type: Array, default: null },
  pageManagerMail: { type: String, default: '' },
  pageManagerNotice: { type: String, default: '' },
  lastUpdated: { type: String, default: '' },
  compact: Boolean,
})

const globalI18n = useI18n({ useScope: 'global' })
const { t, locale, getLocaleMessage, mergeLocaleMessage, availableLocales } = useI18n({ useScope: 'local' })
// console.log('pkg LuMain locale: ', locale.value)
console.log('pkg LuMain getLocaleMessage: ', getLocaleMessage(locale.value))
for (const locale of availableLocales) {
  mergeLocaleMessage(locale, globalI18n.getLocaleMessage('sv'))
}
console.log('pkg LuMain getLocaleMessage: ', getLocaleMessage(locale.value))
</script>

<i18n>
{
    sv: {
      pageManager: 'Sidansvarig',
    },
    en: {
      pageManager: 'Page Manager',
    },
}
</i18n>
