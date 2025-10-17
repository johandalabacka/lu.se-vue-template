<template>
  <router-link
    v-if="props.item.path"
    :to="props.item.path"
    class="dropdown-item"
  >
    {{ t(props.item.id) }}
  </router-link>
  <a
    v-else
    :href="props.item.url"
    class="dropdown-item"
  >
    {{ t(props.item.id) }}
  </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  item: { type: Object, required: true },
})

const { t } = useI18n()
</script>
