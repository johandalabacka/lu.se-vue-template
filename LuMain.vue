<template>
  <main class="main">
    <div class="container">
      <div v-if="leftmanu" class="row">
        <lu-left-menu v-if="leftmenu" :menu="leftmenu"/>
        <div class="col-12 col-xl-9 mb-6 mb-xl-0">
          <slot></slot>
          <div v-if="pageManagerMail" class="row">
            <div class="col-12 col-lg-8">
              <div class=" border-top border-dark mt-5 py-3">
                {{ $t('pageManager')}}: <a :href="pageManagerMail">{{ pageManagerMail }}</a>
                &nbsp;|&nbsp; <strong>{{ lastUpdated }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <slot></slot>
        <div v-if="pageManagerMail" class="row">
            <div class="col-12 col-lg-8">
              <div class=" border-top border-dark mt-5 py-3">
                {{ $t('pageManager')}}: <a :href="pageManagerMail">{{ pageManagerMail }}</a>
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
  props: {
    leftmenu: Array,
    pageManagerMail: String,
    lastUpdated: String
  },
  data () {
    return {
    }
  },
  components: {
    LuLeftMenu
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
