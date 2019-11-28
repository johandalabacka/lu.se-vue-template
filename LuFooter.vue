<template>
    <footer class="footer">
    <div class="container py-2">
      <div class="row pt-1">
        <div class="col-12 col-lg-4 mb-5 text-center text-lg-left">
          <img :src="'/lumall/images/logo/logo_lth_footer_' + $root.$i18n.locale + '@1x.png'"
            
            alt="Lunds universitet" class=" footer-logo">
            <!-- srcset="/lumall/images/logo/logo_lu_footer@1x.png 1x, /lumall/images/logo/logo_lu_footer@2x.png 2x" -->
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
            <a v-if="$root.$i18n.locale == 'sv'" class="nav-link text-white py-1 px-0" href="#" @click.prevent="switchLocale">Change to English <i
                class="fal fa-globe"></i></a>
            <a v-else class="nav-link text-white py-1 px-0" href="#" @click.prevent="switchLocale">Byt till svenska <i
                class="fal fa-globe"></i></a>
            <a class="nav-link text-white py-1 px-0" href="om.html">Om webbplatsen</a>
            <a class="nav-link text-white py-1 px-0" href="cookies.html">Om cookies</a>
          </div>
        </div>
      </div>
      <div v-if="socialMedia" class="row mb-5">
        <div class="col-12 col-lg-4 offset-lg-4">
          <h6 class="p font-weight-bold text-uppercase mb-1 text-center text-lg-left">{{ $t('followUsSocialMedia') }}</h6>
          <ul class="nav nav-social mt-3 nmx-2 justify-content-center justify-content-lg-start">
            <li v-if="socialMedia.facebook" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.facebook"><span
                  class="sr-only">Facebook </span><i class="fab fa-facebook-square  fa-2x"></i>
              </a>
            </li>
            <li v-if="socialMedia.instagram" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.instagram"><span
                  class="sr-only">Instagram </span><i class="fab fa-instagram  fa-2x"></i>
              </a>
            </li>
            <li v-if="socialMedia.linkedin" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.linkedin"><span
                  class="sr-only">LinkedIn </span><i class="fab fa-linkedin  fa-2x"></i>
              </a>
            </li>
            <li v-if="socialMedia.twitter" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.twitter"><span class="sr-only">Twitter
                </span><i class="fab fa-twitter-square  fa-2x"></i>
              </a>
            </li>
            <li v-if="socialMedia.youtube" class="nav-item mx-2">
              <a class="nav-link text-white p-0" :href="socialMedia.youtube"><span
                  class="sr-only">Youtube </span><i class="fab fa-youtube-square  fa-2x"></i>
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
    socialMedia: Object
  },
  data () {
    return {
    }
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
        contactUs: 'Kontakta oss',
        followUsSocialMedia: 'Follow us in social media',
        shortCuts: 'Genvägar'
      },
      en: {
        contactUs: 'Contact Us',
        followUsSocialMedia: 'Följ oss i sociala medier',
        shortCuts: 'Shortcuts'
      }
    }
  }
}
</script>
