<template>
  <main class="main">
    <div class="container">
      <div v-if="leftmenu" class="row">
        <lu-left-menu :menu="leftmenu" />
        <div class="col-12 col-xl-9 mb-6 mb-xl-0">
          <slot />
          <div v-if="pageManagerMail" class="row">
            <div class="col-12 col-lg-8">
              <div class=" border-top border-dark mt-5 py-3">
                {{ $t('pageManager') }}: <a :href="`mailto:${pageManagerMail}`">{{ pageManagerMail }}</a>
                &nbsp;|&nbsp; <strong>{{ lastUpdated }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <slot />
        <div v-if="pageManagerMail" class="row">
          <div class="col-12 col-lg-8">
            <div class=" border-top border-dark mt-5 py-3">
              {{ $t('pageManager') }}: <a :href="`mailto:${pageManagerMail}`">{{ pageManagerMail }}</a>
              &nbsp;|&nbsp; <strong>{{ lastUpdated }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LuLeftMenu from './LuLeftMenu'

export default {
  name: 'LuMain',
  components: {
    LuLeftMenu
  },
  props: {
    leftmenu: { type: Array, default: null },
    pageManagerMail: { type: String, required: true },
    lastUpdated: { type: String, required: true }
  },
  data () {
    return {
    }
  },
  i18n: {
    messages: {
      sv: {
        pageManager: 'Sidansvarig'
      },
      en: {
        pageManager: 'Page Manager'
      }
    }
  }
}
</script>
