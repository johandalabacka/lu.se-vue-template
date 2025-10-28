<template>
  <li
    v-if="!props.item.children"
    class="nav-item"
  >
    <router-link
      v-if="props.item.path"
      :to="props.item.path"
      class="nav-link px-3"
    >
      {{ t(props.item.label) }}
    </router-link>
    <a
      v-else
      class="nav-link px-3"
      :href="props.item.url"
    >
      {{ t(props.item.label) }}
    </a>
  </li>
  <li
    v-else
    class="nav-item dropdown dropdown-hover"
  >
    <router-link
      v-if="props.item.path"
      :to="props.item.path"
      class="nav-link dropdown-toggle px-3"
    >
      {{ t(props.item.label) }}&nbsp;<fa-icon :icon="['fal', 'chevron-down']" />
    </router-link>
    <a
      v-else
      class="nav-link dropdown-toggle px-3"
      :href="props.item.url"
      aria-haspopup="true"
    >
      {{ t(props.item.label) }}&nbsp;<fa-icon :icon="['fal', 'chevron-down']" />
    </a>
    <div class="dropdown-menu dropdown-menu-end text-primary">
      <LuDropdownItem
        v-for="subItem in props.item.children"
        :key="subItem.id"
        :item="subItem"
      />
    </div>
  </li>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

import LuDropdownItem from './LuDropdownItem.vue'

const props = defineProps({
  item: { type: Object, required: true },
})

const { t } = useI18n()
</script>

<style scoped>
.nav-item:hover {
  color: var(--bs-navbar-hover-color) !important;
  text-decoration: underline;
}
</style>
