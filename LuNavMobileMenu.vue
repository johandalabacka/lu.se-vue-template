<template>
  <div
    ref="modal"
    class="modal fade"
    tabindex="-1"
    :aria-hidden="isShowing"
    role="dialog"
  >
    <div class="modal-dialog my-0 mx-auto" role="document">
      <div class="modal-content border-0 rounded-0">
        <div class="modal-body nav-mobile-body">
          <nav class="nav border-bottom p-3 flex-row justify-content-between align-items-center sticky-top bg-white">
            <div id="nav-mobile-label" class="h3 m-0">
              <span class="sr-only">Lunds universitet</span>
            </div>
            <button
              type="button" class="border-0 bg-transparent cursor-pointer lh-0 p-2 nm-2" aria-controls="mobileMenu"
              aria-expanded="false" :aria-label="$t('lu_nav_mobile_hide_menu')" @click="hide"
            >
              <span aria-hidden="true">
                <fa-icon class="fa-lg" :icon="['fal', 'times']" />
              </span>
            </button>
          </nav>
          <ul class="mobile-nav mobile-nav-root border-0 nav-collapse font-size-sm nav-undecorated">
            <LuNavMobileMenuItem v-for="item in menu" :key="item.id" :item="item" @link-selected="hide" />
            <LuNavMobileMenuItemChangeLanguage @link-selected="hide" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

import LuNavMobileMenuItem from './LuNavMobileMenuItem.vue'
import LuNavMobileMenuItemChangeLanguage from './LuNavMobileMenuItemChangeLanguage.vue'

export default {
  name: 'LuNavMobileMenu',
  components: {
    LuNavMobileMenuItem,
    LuNavMobileMenuItemChangeLanguage
  },
  props: {
    menu: { type: Array, required: true }
  },
  data () {
    return {
      modal: null,
      isShowing: false
    }
  },
  i18n: {
    messages: {
      sv: {
        lu_nav_mobile_hide_menu: 'Göm meny'
      },
      en: {
        lu_nav_mobile_hide_menu: 'Hide menu'
      }
    }
  },
  methods: {
    show () {
      if (!this.modal) {
        this.modal = Modal.getOrCreateInstance(this.$refs.modal)
      }
      this.isShowing = true
      this.modal.show()
    },
    hide () {
      this.isShowing = false
      this.modal.hide()
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
