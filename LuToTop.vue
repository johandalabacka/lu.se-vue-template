<template>
  <transition name="fade">
    <button
      v-show="show"
      id="btn--back-to-top"
      class="btn px-2"
      type="button"
      style="display: inline-block;"
      @click.stop="onClick"
    >
      <fa-icon
        class="fa-2x align-middle me-2"
        :icon="['fas', 'chevron-circle-up']"
      />
      <span>{{ $t('to_top') }}</span>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'LuToTop',
  data () {
    return {
      show: false,
      listenerAdded: false,
    }
  },
  mounted () {
    if (this.listenerAdded) {
      return
    }
    window.addEventListener('scroll', this.onScroll)
    this.listenerAdded = true
  },
  activated () {
    if (this.listenerAdded) {
      return
    }
    window.addEventListener('scroll', this.onScroll)
    this.listenerAdded = true
  },
  deactivated () {
    if (!this.listenerAdded) {
      return
    }
    window.removeEventListener('scroll', this.onScroll)
    this.listenerAdded = false
  },
  unmounted () {
    if (!this.listenerAdded) {
      return
    }
    window.removeEventListener('scroll', this.onScroll)
    this.listenerAdded = false // Not really needed
  },
  methods: {
    onClick () {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },
    onScroll (e) {
      this.show = window.pageYOffset > 500
    },
  },
  i18n: {
    messages: {
      sv: {
        to_top: 'Hela vägen upp',
      },
      en: {
        to_top: 'Back to top',
      },
    },
  },
}
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
