<template>
  <router-link
    v-if="item.path"
    :to="item.path"
    class="dropdown-item"
  >
    {{ t(item.id) }}
  </router-link>
  <a
    v-else
    :href="item.url"
    class="dropdown-item"
  >
    {{ t(item.id) }}
  </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  item: { type: Object, required: true },
})

const { t } = useI18n()
</script>

<style scoped>
.text-primary>.dropdown-item.active {
  color: var(--bs-dropdown-link-active-color) !important;
}
.text-primary>.dropdown-item:hover {
  color: var(--bs-dropdown-link-hover-color) !important;
}
.dropdown-item:hover {
  color: var(--bs-dropdown-link-hover-color) !important;
  background: var(--bs-dropdown-link-hover-bg) !important;
}
</style>
