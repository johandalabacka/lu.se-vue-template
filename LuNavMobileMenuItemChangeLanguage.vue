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
      /> {{ t('luvt.change_language') }}
    </a>
  </li>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['link-selected'])

const { t, locale } = useI18n()

const switchLocale = () => {
  const nextLocale = locale.value === 'sv' ? 'en' : 'sv'
  locale.value = nextLocale
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
