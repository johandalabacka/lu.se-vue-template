<template>
    <footer class="footer">
    <div class="container py-2">
      <div class="row pt-1">
        <div class="col-12 col-lg-4 mb-5 text-center text-lg-left">
          <img v-if="logoSrc" :src="logoSrc"
            :alt="logoTitle" class=" footer-logo">
        </div>
        <div v-if="contact" class="col-6 col-md-3 offset-md-3 offset-lg-0 col-lg-4 mb-5">
          <h6 class="p font-weight-bold text-uppercase mb-1">{{ $t('contactUs') }}</h6>
          <p v-if="$root.$i18n.locale == 'sv'">{{ contact.name }}<br>Box {{contact.box}}<br>{{ contact.zip }} LUND<br>{{ contact.phone }}<br>
            <a :href="'mailto:' + contact.mail" class="text-white">{{ contact.mail }}</a></p>
          <p v-else>{{ contact.name }}<br>P.O Box {{contact.box}}<br>SE-{{ contact.zip }} LUND, Sweden<br>{{ intlPhone }}<br>
            <a :href="'mailto:' + contact.mail" class="text-white">{{ contact.mail }}</a></p>
        </div>
        <div v-else class="col-6 col-md-3 offset-md-3 offset-lg-0 col-lg-4 mb-5">
          <!-- placeholder -->
        </div>
        <div class="col-6 col-md-3 col-lg-4 mb-5">
          <h6 class="p font-weight-bold text-uppercase mb-1">{{ $t('shortCuts') }}</h6>
          <div class="nav nav-list flex-column">
            <a class="nav-link text-white py-1 px-0" href="#" @click.prevent="switchLocale">{{ $t('changeLanguage') }}
              <fa-icon :icon="['fal', 'globe']" />
            </a>
            <template v-for="item in shortCuts">
              <router-link v-if="item.path" :to="item.path"  :key="item.id" class="nav-link text-white py-1 px-0">{{ $t(item.label) }}</router-link>
              <a v-else  :key="item.id" class="nav-link text-white py-1 px-0" :href="item.url">{{ $t(item.label) }}</a>
            </template>
          </div>
        </div>
      </div>
      <div v-if="socialMedia" class="row mb-5">
        <div class="col-12 col-lg-4 offset-lg-4">
          <h6 class="p font-weight-bold text-uppercase mb-1 text-center text-lg-left">{{ $t('followUsSocialMedia') }}</h6>
          <ul class="nav nav-social mt-3 nmx-2 justify-content-center justify-content-lg-start">
            <li v-if="socialMedia.facebook" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.facebook"><span
                  class="sr-only">Facebook </span><fa-icon class="fa-2x" :icon="['fab', 'facebook-square']" />
              </a>
            </li>
            <li v-if="socialMedia.instagram" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.instagram"><span
                  class="sr-only">Instagram </span><fa-icon class="fa-2x" :icon="['fab', 'instagram']" />
              </a>
            </li>
            <li v-if="socialMedia.linkedin" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.linkedin"><span
                  class="sr-only">LinkedIn </span><fa-icon class="fa-2x" :icon="['fab', 'linkedin']" />
              </a>
            </li>
            <li v-if="socialMedia.twitter" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.twitter"><span class="sr-only">Twitter
                </span><fa-icon class="fa-2x" :icon="['fab', 'twitter-square']" />
              </a>
            </li>
            <li v-if="socialMedia.youtube" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.youtube"><span
                  class="sr-only">Youtube </span><fa-icon class="fa-2x" :icon="['fab', 'youtube-square']" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LuFooter',
  props: {
    contact: Object,
    socialMedia: Object,
    logoSrc: String,
    logoTitle: String,
    shortCuts: Array
  },
  computed: {
    intlPhone () {
      if (this.contact.phone) {
        if (this.$root.$i18n.locale == 'sv') {
          return this.contact.phone
        }
        return '+46' + this.contact.phone.substring(1)
      }
    }
  },
  methods: {
    switchLocale () {
      this.$root.$i18n.locale = this.$root.$i18n.locale == 'sv' ? 'en' : 'sv'
    }
  },
  i18n: {
    messages: {
      sv: {
        changeLanguage: 'Change to English',
        contactUs: 'Kontakta oss',
        followUsSocialMedia: 'Följ oss i sociala medier',
        shortCuts: 'Genvägar'
      },
      en: {
        changeLanguage: 'Byt till svenska',
        contactUs: 'Contact Us',
        followUsSocialMedia: 'Follow us in social media',
        shortCuts: 'Shortcuts'
      }
    }
  }
}
</script>
