<template>
  <b-modal id="nav-mobile" ref="navMobile" dialog-class="my-0 mx-auto" content-class="border-0 rounded-0" body-class="nav-mobile-body" :hide-header="true" :hide-footer="true">
    <nav class="nav border-bottom p-3 flex-row justify-content-between align-items-center sticky-top bg-white">
      <div id="nav-mobile-label" class="h3 m-0">
        <span class="sr-only">Lunds universitet</span>
      </div>
      <button type="button" class="border-0 bg-transparent cursor-pointer lh-0 p-2 nm-2" aria-controls="mobileMenu"
              aria-expanded="false" aria-label="Dölj meny" @click="hide"
      >
        <span aria-hidden="true"><fa-icon class="fa-lg" :icon="['fal', 'times']" /></span>
      </button>
    </nav>
    <ul class="mobile-nav mobile-nav-root border-0 nav-collapse font-size-sm nav-undecorated">
      <lu-nav-mobile-item v-for="item in menu" :key="item.id" :item="item" @link-selected="hide" />
      <lu-nav-mobile-item-changeLanguage @link-selected="hide" />
    </ul>
  </b-modal>
</template>

<script>
import LuNavMobileItem from './LuNavMobileItem.vue'
import LuNavMobileItemChangeLanguage from './LuNavMobileItemChangeLanguage.vue'

export default {
  name: 'LuNavMobile',
  components: {
    LuNavMobileItem,
    LuNavMobileItemChangeLanguage
  },
  props: {
    menu: { type: Array, required: true }
  },
  data () {
    return {
    }
  },
  methods: {
    show () {
      this.$refs.navMobile.show()
    },
    hide () {
      this.$refs.navMobile.hide()
    }
  }
}
</script>

<style>
  .nav-mobile-body {
    padding: 0px;
  }
  .modal-backdrop {
    opacity: 0.7;
  }
</style>
