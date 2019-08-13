<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <lu-left-menu v-if="leftmenu" :menu="leftmenu"/>
        <div class="col-12 col-xl-9 mb-6 mb-xl-0">
          <div class="row">
            <div class="col-12 col-lg-8 mb-6 mb-lg-0">
              <article>
                <slot></slot>
              </article>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-8">
              <div class=" border-top border-dark mt-5 py-3">
                {{ $t('pageManager')}}: <a :href="pageManagerMail">{{ pageManagerMail }}</a>
                &nbsp;|&nbsp; <strong>{{ lastUpdated }}</strong>
              </div>
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
  props: [
    'leftmenu',
    'pageManagerMail',
    'lastUpdated'
  ],
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
