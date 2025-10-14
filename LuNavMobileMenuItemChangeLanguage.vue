<template>
  <li class="mobile-nav-item">
    <a
      href="#"
      class="nav-link"
      @click.prevent="switchLocale"
    >
      <fa-icon
        aria-hidden="true"
        :icon="['fal', 'globe']"
      /> {{ t('changeLanguage') }}
    </a>
  </li>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['link-selected'])

const globalI18n = useI18n({ useScope: 'global' })

const { t } = useI18n({
  useScope: 'local',
  messages: {
    sv: {
      changeLanguage: 'English',
    },
    en: {
      changeLanguage: 'Svenska',
    },
  },
})

const switchLocale = () => {
  const nextLocale = globalI18n.locale.value === 'sv' ? 'en' : 'sv'
  globalI18n.locale.value = nextLocale
  document.documentElement.lang = nextLocale
  localStorage.setItem('language', nextLocale)
  emit('link-selected')
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
