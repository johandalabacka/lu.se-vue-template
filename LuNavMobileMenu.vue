<template>
  <div
    ref="modalElement"
    class="modal fade"
    tabindex="-1"
    :aria-hidden="isShowing"
    role="dialog"
  >
    <div
      class="modal-dialog my-0 mx-auto"
      role="document"
    >
      <div class="modal-content border-0 rounded-0">
        <div class="modal-body nav-mobile-body">
          <nav class="nav border-bottom p-3 flex-row justify-content-between align-items-center sticky-top bg-white">
            <div
              id="nav-mobile-label"
              class="h3 m-0"
            >
              <span class="sr-only">Lunds universitet</span>
            </div>
            <button
              type="button"
              class="border-0 bg-transparent cursor-pointer lh-0 p-2 nm-2"
              aria-controls="mobileMenu"
              aria-expanded="false"
              :aria-label="t('lu_nav_mobile_hide_menu')"
              @click="hide"
            >
              <span aria-hidden="true">
                <fa-icon
                  class="fa-lg"
                  :icon="['fal', 'times']"
                />
              </span>
            </button>
          </nav>
          <ul class="mobile-nav mobile-nav-root border-0 nav-collapse font-size-sm nav-undecorated">
            <LuNavMobileMenuItem
              v-for="item in props.menu"
              :key="item.id"
              :item="item"
              @link-selected="hide"
            />
            <LuNavMobileMenuItemChangeLanguage @link-selected="hide" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Modal } from 'bootstrap'

import LuNavMobileMenuItem from './LuNavMobileMenuItem.vue'
import LuNavMobileMenuItemChangeLanguage from './LuNavMobileMenuItemChangeLanguage.vue'

const props = defineProps({
  menu: { type: Array, required: true },
})

const { t } = useI18n({
  useScope: 'local',
  messages: {
    sv: {
      lu_nav_mobile_hide_menu: 'Göm meny',
    },
    en: {
      lu_nav_mobile_hide_menu: 'Hide menu',
    },
  },
})

const modalElement = ref(null)
const modalInstance = ref(null)
const isShowing = ref(false)

const show = () => {
  if (!modalInstance.value && modalElement.value) {
    modalInstance.value = Modal.getOrCreateInstance(modalElement.value)
  }
  if (!modalInstance.value) {
    return
  }
  isShowing.value = true
  modalInstance.value.show()
}

const hide = () => {
  isShowing.value = false
  if (!modalInstance.value) {
    return
  }
  modalInstance.value.hide()
}

onUnmounted(() => {
  if (modalInstance.value) {
    modalInstance.value.dispose()
    modalInstance.value = null
  }
})

defineExpose({ show, hide })
</script>

<style>
.nav-mobile-body {
  padding: 0px;
}

.modal-backdrop {
  opacity: 0.7;
}
</style>
