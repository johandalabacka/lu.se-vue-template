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
// console.log('pkg LuDropdownItem item: ', props.item)

const { t } = useI18n({ useScope: 'global' })
// const { t, locale } = useI18n({ useScope: 'global' })
// const i18n = useI18n({ useScope: 'global' })
// console.log('pkg LuDropdownItem global shortCuts: ', t('shortCuts') !== 'shortCuts' ? t('shortCuts') : 'NOT FOUND')
// console.log('pkg LuDropdownItem: ', i18n.availableLocales)
// console.log('pkg LuDropdownItem: ', locale.value)

</script>
