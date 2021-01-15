<template>
  <li class="mobile-nav-item">
    <a href="#" class="nav-link" @click.prevent="switchLocale">
      <fa-icon aria-hidden="true" :icon="['fal', 'globe']" /> {{ $t('changeLanguage') }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'LuNavMobileItemChangeLanguage',
  methods: {
    switchLocale () {
      this.$root.$i18n.locale = this.$root.$i18n.locale === 'sv' ? 'en' : 'sv'
      document.getElementsByTagName('html')[0].lang = this.$root.$i18n.locale
      localStorage.setItem('language', this.$root.$i18n.locale)
      this.$emit('link-selected')
    }
  },
  i18n: {
    messages: {
      sv: {
        changeLanguage: 'English'
      },
      en: {
        changeLanguage: 'Svenska'
      }
    }
  }
}
</script>

<style scoped>
.slide-enter-active {
   transition-duration: 0.5s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.5s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 500px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
