<template>
  <footer class="footer">
    <div class="container py-2">
      <div class="row pt-1">
        <div class="col-12 col-lg-4 mb-5 text-center text-lg-start">
          <img
            v-if="logoSrc"
            :src="logoSrc"
            :alt="logoTitle"
            class="footer-logo"
          >
        </div>
        <div
          v-if="contact"
          class="col-6 col-md-3 offset-md-3 offset-lg-0 col-lg-4 mb-5"
        >
          <h6 class="p font-weight-bold text-uppercase mb-1">
            {{ t('luvt.footer.contact_us') }}
          </h6>
          <p v-if="isSwedish">
            {{ contact.name }}<br>Box {{ contact.box }}<br>{{ contact.zip }} LUND<br>{{ contact.phone }}<br>
            <a
              :href="'mailto:' + contact.mail"
              class="text-white"
            >{{ contact.mail }}</a>
          </p>
          <p v-else>
            {{ contact.name }}<br>P.O Box {{ contact.box }}<br>SE-{{ contact.zip }} LUND, Sweden<br>{{ intlPhone }}<br>
            <a
              :href="'mailto:' + contact.mail"
              class="text-white"
            >{{ contact.mail }}</a>
          </p>
        </div>
        <div
          v-else
          class="col-6 col-md-3 offset-md-3 offset-lg-0 col-lg-4 mb-5"
        >
          <!-- placeholder -->
        </div>
        <div class="col-6 col-md-3 col-lg-4 mb-5">
          <h6 class="p font-weight-bold text-uppercase mb-1">
            {{ t('luvt.footer.shortcuts') }}
          </h6>
          <div class="nav nav-list flex-column">
            <a
              class="nav-link text-white py-1 px-0"
              href="#"
              @click.prevent="switchLocale"
            >{{ t('luvt.footer.change_language') }}
              <fa-icon :icon="['fal', 'globe']" />
            </a>
            <template v-for="item in shortCuts">
              <router-link
                v-if="item.path"
                :key="item.id"
                :to="item.path"
                class="nav-link text-white py-1 px-0"
              >
                {{ t(item.label) }}
              </router-link>
              <a
                v-else
                :key="`${item.id}-else`"
                class="nav-link text-white py-1 px-0"
                :href="item.url"
              >{{ t(item.label) }}</a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  contact: { type: Object, default: null },
  logoSrc: { type: String, required: true },
  logoTitle: { type: String, required: true },
  shortCuts: { type: Array, default: null },
})

const route = useRoute()

const { t, locale } = useI18n()

const isSwedish = computed(() => locale.value === 'sv')

const intlPhone = computed(() => {
  const phone = props.contact?.phone
  if (!phone) {
    return ''
  }
  return isSwedish.value ? phone : `+46${phone.substring(1)}`
})

const updateDocumentTitle = function () {
  const metaTitle = typeof route.meta?.title === 'string' ? route.meta.title : null
  if (metaTitle) {
    document.title = t(metaTitle)
    return
  }
  const routeName = route.name
  if (typeof routeName === 'string') {
    document.title = t(routeName)
  }
}

const switchLocale = function () {
  const nextLocale = isSwedish.value ? 'en' : 'sv'
  locale.value = nextLocale
  document.documentElement.lang = nextLocale
  localStorage.setItem('language', nextLocale)
  updateDocumentTitle()
}
</script>
