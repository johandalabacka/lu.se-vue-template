<template>
  <li
    v-if="props.item.children"
    class="nav-item dropdown dropdown-hover"
    :class="{ active }"
  >
    <router-link
      v-if="props.item.path"
      :to="props.item.path"
      class="nav-link text-nowrap dropdown-toggle"
      aria-haspopup="true"
    >
      {{ t(props.item.label) }}
    </router-link>
    <a
      v-else
      :href="props.item.url"
      class="nav-link text-nowrap dropdown-toggle"
      aria-haspopup="true"
    >
      {{ t(props.item.label) }}
    </a>
    <div
      class="dropdown-menu font-size-base"
      :class="[props.lastItem ? 'dropdown-menu-end' : '']"
      aria-labelledby="dropdown-studera"
    >
      <LuDropdownItem
        v-for="subMenuItem in props.item.children"
        :key="subMenuItem.id"
        :item="subMenuItem"
      />
    </div>
  </li>
  <li
    v-else
    class="nav-item"
    :class="{ active }"
  >
    <router-link
      v-if="props.item.path"
      :to="props.item.path"
      class="nav-link text-nowrap"
      aria-haspopup="true"
    >
      {{ t(props.item.label) }}
    </router-link>
    <a
      v-else
      :href="props.item.url"
      class="nav-link text-nowrap"
      aria-haspopup="true"
    >
      {{ t(props.item.label) }}
    </a>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import LuDropdownItem from './LuDropdownItem.vue'

const props = defineProps({
  item: { type: Object, required: true },
  lastItem: Boolean,
})

const route = useRoute()
const { t } = useI18n({ useScope: 'global' })

const active = computed(() => {
  const targetPath = props.item?.path
  return targetPath ? route.path === targetPath : false
})
</script>
