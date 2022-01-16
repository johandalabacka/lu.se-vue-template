<template>
  <main class="main" :class="{'mt-2': compact}">
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
                <template v-if="pageManagerNotice">
                  <br><small>{{ pageManagerNotice }}</small>
                </template>
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
              <template v-if="pageManagerNotice">
                <br><small>{{ pageManagerNotice }}</small>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LuLeftMenu from './LuLeftMenu.vue'

export default {
  name: 'LuMain',
  components: {
    LuLeftMenu
  },
  props: {
    leftmenu: { type: Array, default: null },
    pageManagerMail: { type: String, default: '' },
    pageManagerNotice: { type: String, default: '' },
    lastUpdated: { type: String, default: '' },
    compact: Boolean
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
