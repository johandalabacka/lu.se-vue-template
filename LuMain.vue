<template>
  <main
    class="main"
    :class="{'mt-2': compact}"
  >
    <div class="container">
      <div
        v-if="leftmenu"
        class="row"
      >
        <LuLeftMenu :menu="leftmenu" />
        <div class="col-12 col-xl-9 mb-6 mb-xl-0">
          <slot />
          <div
            v-if="pageManagerMail"
            class="row"
          >
            <div class="col-12 col-lg-8">
              <div class=" border-top border-dark mt-5 py-3">
                {{ t('luvt.main.page_manager') }}: <a :href="`mailto:${pageManagerMail}`">{{ pageManagerMail }}</a>
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
        <div
          v-if="pageManagerMail"
          class="row"
        >
          <div class="col-12 col-lg-8">
            <div class=" border-top border-dark mt-5 py-3">
              {{ t('luvt.main.page_manager') }}: <a :href="`mailto:${pageManagerMail}`">{{ pageManagerMail }}</a>
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

<script setup>
import { useI18n } from 'vue-i18n'

import LuLeftMenu from './LuLeftMenu.vue'

defineProps({
  leftmenu: { type: Array, default: null },
  pageManagerMail: { type: String, default: '' },
  pageManagerNotice: { type: String, default: '' },
  lastUpdated: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})

const { t } = useI18n()
</script>
