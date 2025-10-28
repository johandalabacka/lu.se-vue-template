<template>
  <transition name="fade">
    <button
      v-show="show"
      id="btn--back-to-top"
      class="btn px-2"
      type="button"
      style="display: inline-block;"
      @click.stop="handleClick"
    >
      <fa-icon
        class="fa-2x align-middle me-2"
        :icon="['fas', 'chevron-circle-up']"
      />
      <span>{{ t('luvt.to_top') }}</span>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const show = ref(false)
const listenerAdded = ref(false)

const handleScroll = function () {
  show.value = window.pageYOffset > 500
}

const addScrollListener = function () {
  if (listenerAdded.value) {
    return
  }
  window.addEventListener('scroll', handleScroll)
  listenerAdded.value = true
}

const removeScrollListener = function () {
  if (!listenerAdded.value) {
    return
  }
  window.removeEventListener('scroll', handleScroll)
  listenerAdded.value = false
}

const handleClick = function () {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

onMounted(addScrollListener)
onActivated(addScrollListener)
onDeactivated(removeScrollListener)
onUnmounted(removeScrollListener)
</script>

<style scoped>

  #btn--back-to-top {
    display: none;
    position: fixed;
    right: -3px;
    bottom: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 2rem;
    border-width: 3px;
    border-top-left-radius: 5rem;
    border-top-right-radius: 0;
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 0;
    border-color: #fff;
    background-color: #4d4c44;
    color: #fff;
    line-height: 2rem;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
