<template>
  <footer class="footer">
    <div class="container py-2">
      <div class="row pt-1">
        <div class="col-12 col-lg-4 mb-5 text-center text-lg-start">
          <img
            v-if="props.logoSrc"
            :src="props.logoSrc"
            :alt="props.logoTitle"
            class="footer-logo"
          >
        </div>
        <div
          v-if="props.contact"
          class="col-6 col-md-3 offset-md-3 offset-lg-0 col-lg-4 mb-5"
        >
          <h6 class="p font-weight-bold text-uppercase mb-1">
            {{ t('luvt.footer.contact_us') }}
          </h6>
          <p v-if="isSwedish">
            {{ props.contact.name }}<br>Box {{ props.contact.box }}<br>{{ props.contact.zip }} LUND<br>{{ props.contact.phone }}<br>
            <a
              :href="'mailto:' + props.contact.mail"
              class="text-white"
            >{{ props.contact.mail }}</a>
          </p>
          <p v-else>
            {{ props.contact.name }}<br>P.O Box {{ props.contact.box }}<br>SE-{{ props.contact.zip }} LUND, Sweden<br>{{ intlPhone }}<br>
            <a
              :href="'mailto:' + props.contact.mail"
              class="text-white"
            >{{ props.contact.mail }}</a>
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
            <template v-for="item in props.shortCuts">
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
      <div
        v-if="props.socialMedia"
        class="row mb-5"
      >
        <div class="col-12 col-lg-4 offset-lg-4">
          <h6 class="p font-weight-bold text-uppercase mb-1 text-center text-lg-start">
            {{ t('luvt.footer.follow_us_social_media') }}
          </h6>
          <ul class="nav nav-social mt-3 nmx-2 justify-content-center justify-content-lg-start">
            <li
              v-if="props.socialMedia.facebook"
              class="nav-item mx-2"
            >
              <a
                class="nav-link text-white p-0"
                :href="props.socialMedia.facebook"
              ><span
                class="sr-only"
              >Facebook </span><fa-icon
                class="fa-2x"
                :icon="['fab', 'facebook-square']"
              />
              </a>
            </li>
            <li
              v-if="props.socialMedia.instagram"
              class="nav-item mx-2"
            >
              <a
                class="nav-link text-white p-0"
                :href="props.socialMedia.instagram"
              ><span
                class="sr-only"
              >Instagram </span><fa-icon
                class="fa-2x"
                :icon="['fab', 'instagram']"
              />
              </a>
            </li>
            <li
              v-if="props.socialMedia.linkedin"
              class="nav-item mx-2"
            >
              <a
                class="nav-link text-white p-0"
                :href="props.socialMedia.linkedin"
              ><span
                class="sr-only"
              >LinkedIn </span><fa-icon
                class="fa-2x"
                :icon="['fab', 'linkedin']"
              />
              </a>
            </li>
            <li
              v-if="props.socialMedia.twitter"
              class="nav-item mx-2"
            >
              <a
                class="nav-link text-white p-0"
                :href="props.socialMedia.twitter"
              ><span class="sr-only">Twitter
              </span><fa-icon
                class="fa-2x"
                :icon="['fab', 'twitter-square']"
              />
              </a>
            </li>
            <li
              v-if="props.socialMedia.youtube"
              class="nav-item mx-2"
            >
              <a
                class="nav-link text-white p-0"
                :href="props.socialMedia.youtube"
              ><span
                class="sr-only"
              >Youtube </span><fa-icon
                class="fa-2x"
                :icon="['fab', 'youtube-square']"
              />
              </a>
            </li>
          </ul>
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
  socialMedia: { type: Object, default: null },
  logoSrc: { type: String, required: true },
  logoTitle: { type: String, required: true },
  shortCuts: { type: Array, default: null },
})

const route = useRoute()

const { t, locale } = useI18n()
// const { t, locale, messages } = useI18n({ useScope: 'global' })
// console.log('pkg: ', messages.value)

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
